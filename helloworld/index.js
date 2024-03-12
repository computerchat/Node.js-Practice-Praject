var http = require("http");
http.createServer(function(req,res){
    let a = [{
        "id":1,
        "name":"Raj"
    },{
        "id":2,
        "name":"Rohit"
    }];
    console.log("PORT Open 4040", a);
    res.end("hello"+ JSON.stringify(a));
}).listen("4040")



