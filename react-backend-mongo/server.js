require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handlers');
const request = require("request");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const config = require("configuration.json");
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());     // use jwt token auth middleware for security

app.use('/users', require('./users/users.controller')); //set routes

app.use(errorHandler);
    
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});