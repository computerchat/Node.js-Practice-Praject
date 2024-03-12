const express = require("express");
const app = express();

app.get(function(req,res,next){
    console.log("Middleware is running");
    next();
});

app.get('/', function(req,res){
   res.send("Hello World")
});

app.get('/profile', function(req,res){
   res.send("Here, You see Your Profile");
});

app.get('/profile/:username',function(req,res){
    res.send(`Your name is ${req.params.username}`);
});

app.listen(3030)