var http = require("http");
http.createServer(function(req,res){
let a = 56;
let b = 5;
let c = a/b;
console.log("The division of a and b",c);
res.end("Division of a and b is"+c);
}).listen("5005")


 