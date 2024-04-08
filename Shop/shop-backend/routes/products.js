
var express = require('express');
var router = express.Router();
const { getTokenFrom, getUserIdByName } = require('../utils/auth')
const jwt = require('jsonwebtoken')
const { USER_TYPES, switchUserSecret } = require('../utils/enums')
var multer=require('multer');
var Product = require('../schemas/productSchema');

// now we NEED CRUD operations for products but, the create/ update can be done by the producer and delete by the admin and producer

const storage=multer.diskStorage({
    destination:function(req,file,cb) {
      cb(null,"./public/static/media")
    },
    filename:function(req,file,cb)
    {
      console.log(file)
      cb(null,file.originalname)
    }
})
  
const upload= multer({storage:storage})

router.get('/', async function(req, res, next) {
    const products = await Product.find({})
    res.status(200).json(products)
});

router.get('/:id', async function(req, res, next) {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
});

router.post('/', upload.single('productImage'), async function(req, res, next) {
    const body = req.body

    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, switchUserSecret(USER_TYPES.PRODUCER))
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const path = req.file.path.substring(6)

    const product = new Product({
        name: body.name,
        description: body.description,
        price: body.price,
        producerId: body.producerId,
        type: body.type,
        imageUrl: path
    })

    const savedProduct = await product.save().catch(err => {
        console.log(err)
        return res.status(400).json({ error: 'product not saved' })
    })

    res.status(201).json(savedProduct)
});

router.put('/:id', async function(req, res, next) {
    const body = req.body

    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, switchUserSecret(USER_TYPES.PRODUCER))
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const product = {
        name: body.name,
        description: body.description,
        price: body.price,
        type: body.type,
        imageUrl: body.imageUrl
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, product, { new: true })
    res.status(200).json(updatedProduct)
});

// change image of product

router.put('/image/:id', upload.single('productImage'), async function(req, res, next) {
    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, switchUserSecret(USER_TYPES.PRODUCER))
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const path = req.file.path.substring(6)

    const product = {
        imageUrl: path
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, product, { new: true })
    res.status(200).json(updatedProduct)
});

router.delete('/:id', async function(req, res, next) {
    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, process.env.SECRET_ADMIN)
    const decodedTokenProducer = jwt.verify(token, switchUserSecret(USER_TYPES.PRODUCER))
    if (!token || !decodedToken.id || !decodedTokenProducer.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    await Product.findByIdAndRemove(req.params.id)
    res.status(204).end()
});


module.exports = router;