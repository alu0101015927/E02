'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = Schema({
    title: String,
    description: String,
    autor: String,
    image: String,
    date: Date,
    price: Number,
});

module.exports = mongoose.model('Game',GameSchema);