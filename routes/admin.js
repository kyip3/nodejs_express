const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    console.log('another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body); //will be undefined, use body-parser
    res.redirect('/');
});


module.exports = router;