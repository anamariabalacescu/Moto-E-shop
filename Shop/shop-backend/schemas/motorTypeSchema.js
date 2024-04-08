const mongoose = require('mongoose')

const motorTypeSchema=new mongoose.Schema({
    type: String
});

motorTypeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const MotorType = mongoose.model('MotorType', motorTypeSchema);

module.exports = MotorType