const dotenv = require("dotenv");
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app =express();

dotenv.config({path: './config.env'});
require('./db/conn');

const PORT = process.env.PORT ;

const User = require('./model/userSchema');
const User = require('./model/addfolderSchema');
const User = require('./model/addnoteSchema');

app.use(express.json());

//we link the router files to make our route easy 

app.use(require('./controller/usercontroller'));
app.use(require('./controller/addfolderController'));
app.use(require('./controller/addnoteController'));

//  listen funtion
app.listen(PORT, ()=>{
    console.log('server is running at port : 5000' );
})