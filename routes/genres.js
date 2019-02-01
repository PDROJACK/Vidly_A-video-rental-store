const express = require('express');
const router = express.Router();
const Joi = require('joi');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises',{
    useNewUrlParser: true
})
    .then(()=>console.log('Connected...'))
    .catch(err=>console.error("Connection failed..."));

const genre = new mongoose.Schema({
    name: String,
});

const Genre = mongoose.model('Genre', genre);

await getGenre()

router.get('/',(req,res)=>{
    res.send( );
});

router.get('/:id',(req,res)=>{
    let genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre with given id is not found');
    res.send(genre);
});

router.post('/',(req,res)=>{
    const { error } = validateCourse(req.body);

    if (error){
        return res.status(400).send(error.details[0].message)
    }

    const genre = {
        id: genres.length + 1,
        name: req.body.name,
    };
    genres.push(genre);
    res.send(genre);
});

router.put('/:id',(req,res)=>{
    let genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre with given id is not found');
    
    const { error } = validateCourse(req.body);
    
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    
    genre.name = req.body.name;
    res.send(genre);

});

router.delete('/:id',(req,res) => {
    let genre = genres.find(c=> c.id === parseInt(req.params.id));
    if(!genre){ 
        return res.status(404).send('The genre with given id is not found');
    }
    const index=genres.indexOf(genre);
    genres.splice(index);
    res.send(genres);
});

function validateCourse(genre){
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}   

module.exports = router;