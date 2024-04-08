const mongoose = require('mongoose')

const productSchema=new mongoose.Schema({
    imageUrl:String,
    price:Number,
    name:String,
    type: String,
    description:String,
    producerId: String
});

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product