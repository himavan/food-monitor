const mongoose = require('mongoose');
const Joi = require('joi');

const monitorSchema = new mongoose.Schema({
    count: {
        type:String
    },
    humidity:{
        type:String
    },
    temperature:{
        type:String
    },
    analog1:{
        type:String
    },
    analog2:{
        type:String
    },
    camera_state:{
        type:String
    }
});

const Monitor = mongoose.model('Monitor', monitorSchema);

function validateMonitor(monitor) {
    const schema = {
        count: Joi.string().required(),
        humidity: Joi.string().required(),
        temperature: Joi.string().required(),
        analog1: Joi.string().required(),
        analog2: Joi.string().required(),
        camera_state: Joi.string().required(),
       
    };
    return Joi.validate(monitor, schema);
}


exports.Monitor = Monitor;
exports.validate = validateMonitor;