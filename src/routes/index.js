const express = require ('express');
const router = express.Router();

router.get('/', (req, res) =>{

    res.send('Hello in Node :) ');
});

router.get('/about', (req, res) =>{

    res.send('Abaout');
});
module.exports= router;