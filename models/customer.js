const Joi = require('joi');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {type:String,minlength: 3,required: true},
    isGold: {type:Boolean,length: 10,required: true},
    phone: {type: String,required: true}
});

const Customer = mongoose.model('Customer',customerSchema);

function validateCustomer(customer){
    const schema = {
        name: Joi.string().min(3).required(),
        isGold: Joi.boolean().required(),
        phone: Joi.string().length(10).required()
    }
    return Joi.validate(customer,schema);
}


exports.Customer = Customer;
exports.validate = validateCustomer;