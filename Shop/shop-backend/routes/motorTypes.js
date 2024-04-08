var express = require('express');
var router = express.Router();
var MotorType=require('../schemas/motorTypeSchema')


router.get('/', async function(req, res, next) {
    const motorTypes = await MotorType.find({})
    res.status(200).json(motorTypes)
});

router.post('/', async function(req, res, next) {
    const body = req.body
    const motorType = new MotorType({
        type: body.type
    })

    const savedMotorType = await motorType.save()
    res.status(201).json(savedMotorType)
});

module.exports = router;
