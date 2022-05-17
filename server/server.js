//import express
const express = require('express');
//create express app
const app = express();

//share client side files with public
app.use(express.static('server/public'));
//listen for internet requests 
app.listen(5000, ()=> {
    console.log('I am listening')
});

console.log('ima server')