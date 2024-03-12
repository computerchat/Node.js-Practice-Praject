const mongoose = require('mongoose');
const express = require('express');


mongoose.connect('mongodb://127.0.0.1:27017/signuinAndSignupOne');

// Define the schema for the user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // Ensures that usernames are unique
  },
  password: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;


