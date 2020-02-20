const mongoose = require('mongoose');
const Joi = require('joi');

const monitorSchema = new mongoose.Schema({
    humidity: {
        type:String
    },
    temperature:{
        type:String
    },
    analog1:{
        type:String
    },
    alcohol_ppm:{
        type:String
    },
    analog2:{
        type:String
    },
    methane_ppm:{
        type:String
    },
    camera_state:{
        type:String
    }
});

const Monitor = mongoose.model('Monitor', monitorSchema);

function validateMonitor(monitor) {
    const schema = {
        humidity: Joi.string().min(0).max(50).required(),
        temperature: Joi.string().min(0).max(255).required(),
        analog1: Joi.string().min(0).max(255).required(),
        alcohol_ppm: Joi.string().min(0).max(255).required(),
        analog2: Joi.string().min(0).max(255).required(),
        methane_ppm: Joi.string().min(0).max(255).required(),
        camera_state: Joi.string().min(0).max(255).required(),
       
    };
    return Joi.validate(monitor, schema);
}


exports.Monitor = Monitor;
exports.validate = validateMonitor;