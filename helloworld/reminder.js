var http = require ("http");
http.createServer(function(req,res){
    let a=45;
    let b=6;
    let c=a%b;
    console.log("Reminder of a and b is ",c);
    res.end("Reminder of a and b is"+c);
}).listen("5040")