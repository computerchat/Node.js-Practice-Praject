var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET users listing. */

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);


