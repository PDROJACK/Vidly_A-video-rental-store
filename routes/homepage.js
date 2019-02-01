const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('homepage',{ title : 'Pdley', heading: 'Pdley'});
});

module.exports = router;

