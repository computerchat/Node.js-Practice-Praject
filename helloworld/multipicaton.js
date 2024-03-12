var http = require("http");
http.createServer(function(req,res){
    let a = 5;
    let b = 5;
    let c = a*b;
    console.log("Current port is 4000",c);
    res.end("Hello  c="+c);
 }).listen("4000")
 
 
   
   
    