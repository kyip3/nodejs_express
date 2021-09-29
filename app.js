const http = require('http'); 
const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('in middleware');
    next(); // allow request to continue to the next middleware below
});

app.use((req,res,next)=>{
    console.log('another middleware');
    res.send('<h1>hello from express!</h1>');
});

app.listen(3000);