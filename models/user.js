const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
 

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 55,
        required: true
    },
    email: {
        type: String,
        unique: true,
        minlength: 5,
        maxlength: 255,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1024,
        required: true
    }
}));

function validateUser(user){
    const schema = {
        name: Joi.string().min(3).max(55).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(1024).required()
    }

    return Joi.validate(user,schema);
}


exports.User = User;
exports.Validate = validateUser;