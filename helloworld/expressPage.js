const express = require("express");
const app = express();
const PORT = 5005;
app.get('/home',(req,res) =>{
    console.log("Hi, It's Home Page");
    res.send("Hello, It's Home Page");
})
app.get('/about',(req,res) =>{
    console.log("Hi, it's about us Page");
    res.send("Hello, It's about us Page")
})
app.get('/contact',(req,res) =>{
    console.log("Hi, it's contact page")
    res.send("Hello, It's contact page")
})
app.get('/carrer',(req,res) =>{
    console.log("Hi, it's carrer page")
    res.send("Hello, It's carrer page")
})
app.listen(PORT, (err) =>{
    if(err)console.log("error porting -",err.message);

console.log ("Current port is ${PORT}" );
});