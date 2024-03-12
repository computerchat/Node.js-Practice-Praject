const express = require("express");
const app = express();

app.get('/', function (req, res){
res.send('hello world');
})

app.get ('/profile', function(req, res){
    res.send('Hello, Here is your Profile');
})

app.get('/profile/username', function(req,res){
    res.send('Hello, Here type your name');
})

app.listen("3000");