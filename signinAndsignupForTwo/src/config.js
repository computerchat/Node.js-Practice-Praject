const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb://127.0.0.1:27017/Login-tut-Practice");

//cheack database connected or not
connect.then(()=>{
    console.log("Database connected Successful");
})
.catch(()=>{
    console.log("Database cannot be connected");
})

//Create a Schema
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    password:{
        type:String,
        require: true
    }
})

//Collection Part
const collection = new mongoose.model("users",LoginSchema);
module.exports = collection;