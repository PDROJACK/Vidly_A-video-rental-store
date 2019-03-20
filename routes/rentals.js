const express = require('express');
const router = express.Router();
const {Rental,validate} = require('../models/rental');
const {Movie} = require('../models/movie');
const {Customer} = require('../models/customer');

router.get('/',async (req,res)=>{
    const rental = await Rental.find().sort('-issueDate');
    res.send(rental);
});

router.post('/',async (req,res)=>{
    const {error} = validate(req.body);

    if(error){
        return res.status(404).send(error.details[0].message)
    }

    const movie = await Movie.findById(req.body.movieId);
    if(!movie) return res.status(400).send('Movie not found');

    const customer = await Customer.findById(req.body.customerId);
    if(!customer) return res.status(400).send('Customer not found');

    if(movie.numberInStock === 0) return res.status(400).send("Out of Stock");
    
    let rental = new Rental({
        movie: {
            _id: movie._id,
            name: movie.name,
            dailyRentalRate: movie.dailyRentalRate
        },
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        }
    });

    rental = await rental.save();
    movie.numberInStock--;
    movie.save();
    
    res.send(rental);
});

module.exports = router;