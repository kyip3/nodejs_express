const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/add-product',(req,res,next)=>{
    console.log('another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');
});

app.post('/product',(req,res,next)=>{
    console.log(req.body); //will be undefined, use body-parser
    res.redirect('/');
});

//will load as long as there is a /
app.use('/',(req,res,next)=>{
    res.send('<h1>hello from express!</h1>');
});

app.listen(3000);