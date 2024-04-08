var express = require('express');
var router = express.Router();
const { getTokenFrom, getUserIdByName } = require('../utils/auth')
const jwt = require('jsonwebtoken')
const { USER_TYPES, switchUserSecret } = require('../utils/enums')


var Order = require('../schemas/orderSchema');

// we need get all orders for a certain user with an id taken from the token and create an order for a user with a certain id taken from the token


router.get('/', async function(req, res, next) {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, switchUserSecret(USER_TYPES.CLIENT))
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    const orders = await Order.find({ userId: decodedToken.id })
    res.status(200).json(orders)
});

router.post('/', async function(req, res, next) {
    const body = req.body

    const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, switchUserSecret(USER_TYPES.CLIENT))
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }

    const order = new Order({
        userId: decodedToken.id,
        productList: body.productList,
    })

    const savedOrder = await order.save().catch(err => {
        console.log(err)
        return res.status(400).json({ error: 'order not saved' })
    })

    res.status(201).json(savedOrder)
});

module.exports = router;