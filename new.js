const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises',{
    useNewUrlParser: true
})
    .then(()=>console.log('Connected...'))
    .catch(err=>console.error("Connection failed..."));


const videoSchema = new mongoose.Schema({
    name: String,
    creator: String,
    price: Number,
    isAvailable: Boolean,
    dateOfRelease: {type:Date},
    genre: [String]
});

const Video = mongoose.model('Video',videoSchema);

async function run(){
    const Videos = await getVideos()
    console.log(Videos);
}

run();
