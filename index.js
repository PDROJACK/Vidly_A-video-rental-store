const express = require('express');  
const app = express();
const genres = require('./routes/genres');
const homepage = require('./routes/homepage');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vidley',{
    useNewUrlParser: true
})
    .then(()=>console.log('Connected...'))
    .catch(err=>console.error("Connection failed..."));


app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());
app.use('/api/genres/',genres);
app.use('/',homepage);


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on port ${port}`));