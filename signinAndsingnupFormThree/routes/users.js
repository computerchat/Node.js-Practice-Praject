const mongoose = require("mongoose");
const express = require('express');


mongoose.connect('mongodb://127.0.0.1:27017/signuinAndSignupThree', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or perform other operations here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
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
module.exports = mongoose.model('User', userSchema);

