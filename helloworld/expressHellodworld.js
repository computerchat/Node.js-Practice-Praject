const express = require("express");
const app = express();
const PORT = 4041;
app.get('/home',(req,res)=>{
    console.log('hello world');
    res.send("hello world");
});

app.listen(PORT, (err)=>{
    if(err)console.log("error porting -",err.message);
    console.log(`current port is ${PORT}`);
});