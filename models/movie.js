const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');

const movieSchema = new mongoose.Schema({
    name : {type: String,minlength: 1,maxlength: 255,required: true},
    genre : {type: genreSchema,required: true},
    numberInStock: {type: Number, minlength: 0, required: true},   
    dailyRentalRate: {type: Number,minlength: 0, required: true}
});

const Movie = mongoose.model('Movies',movieSchema);

function validateMovie(movie){
    const schema = {
        name: Joi.string().min(1).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    };

    return Joi.validate(movie, schema);
}

exports.movieSchema = movieSchema;
exports.Movie = Movie;
exports.validate = validateMovie;