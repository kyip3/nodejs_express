const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body); //will be undefined, use body-parser
    res.redirect('/');
    console.log("in /product");
});


module.exports = router;