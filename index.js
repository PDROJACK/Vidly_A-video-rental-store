const express = require('express');  
const app = express();
const genres = require('./routes/genres');
const homepage = require('./routes/homepage');


app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());
app.use('/api/genres/',genres);
app.use('/',homepage);


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on port ${port}`));