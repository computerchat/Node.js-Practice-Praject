// For Database

// 1. install mongoosejs
// 2. require and setup connection
// 3. make Schema
// 4. create model and export


// Here make variable and store
const mongoose = require("mongoose");

// Here we setup the connection by using mongose .connect and practicekaro our database name and 27017 is our mogoose port just like localhost 3000
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");

// here we creat Schema that name is userschema
// Schema means banne wala har document mein kya kya hoga
const userschema = mongoose.Schema({
  useName: String,
  name: String, 
  age: Number,
});


// Here we create a modal and also give the name and schema
module.exports = mongoose.model("user", userschema);