const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

function validateCourse(genre){
    const schema = {
        name: Joi.string().min(5).required()
    };

    return Joi.validate(genre, schema);
}   

const Genre = mongoose.model('Genres', genreSchema);

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateCourse;

