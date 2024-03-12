const express = require("express");
const app = express();

app.use(function(req,res,next){
    console.log("Middleware Working");
    next();
})

app.get('/', function(req,res){
    res.send("Hello World");
})
app.get('/profile', function(req,res){
    res.send("Hello, Here You See Your Profile");
})
app.listen(3010)
