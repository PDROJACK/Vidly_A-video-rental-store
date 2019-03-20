const express = require('express');
const {movieSchema} = require('./movie');
const mongoose = require('mongoose');
const Joi = require('joi');
const  {customerSchema} = require('./customer');

const Rental = mongoose.model('Rental',new mongoose.Schema({
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                trim: true, 
                minlength: 5,
                maxlength: 255
            },
            numberInStock: {
                type: Number,
                min: 0,
                max: 255
            },
            dailyRentalRate: {
                type: Number,
                min: 0,
                max: 255
            }
        }), 
        required: true
    },
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                minlength: 3
            },
            isGold: {
                type: Boolean
            },
            phone: {
                type: String,
                length: 10
            }
        }), required: true
    },
    
    issueDate: {
        type: Date,
        default: Date.now()
    },

    dateReturned: {
        type: Date
    },

    rentalFee: {
        type: Number
    }
  
}));


function validatorFunction(rental){
    const schema = {
        movieId: Joi.string().required(),
        customerId: Joi.string().required()
    }

    return Joi.validate(rental, schema);
};

exports.Rental = Rental;
exports.validate = validatorFunction;