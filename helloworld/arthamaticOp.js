var http = require ("http");
const { listenerCount } = require("process");
http.createServer(function(req,res){
    let a = 5;
    let b =54;
    let c =a+b;
    let d =a-c;
    let e =a*d;
    let f = a/e;
    console.log("PORT is runnign in 4005",c,d,e,f);
    res.end("Hello Arthamatic Opration c="+c+ "d="+d+ "e="+e+ "f"+f); 
}).listen("4005")