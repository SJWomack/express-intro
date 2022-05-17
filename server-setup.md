SERVER SETUP

npm init
npm install express
make file .gitignore (node_modules/.Ds_Store)

in server.js -- 
//import express
const express = require('express');
//create express app
const app = express();
//share client side files with public
app.use(express.static('server/public'));
//listen for internet requests 
app.listen(5000, ()=> {
    console.log('I am listening')
});)



START STOP SERVER

to stop server -- ctr + c
stop and start on saves



