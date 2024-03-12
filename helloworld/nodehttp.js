const fs = require("fs");
const http = require("http");

const myServer = http.createServer((req,res)=>{
const log = `${Date.now()}: ${req.url}New Req Recevied\n`
fs.appendFile("log.txt", log, (err, data)=>{
    switch (req.url){
        case "/":
            res.end("/HomePage");
            break;
            case "/about":
                res.end("I am Rohit");
            default:
                res.end("404 Not found");
    }
})
})
myServer.listen(8000,() => console.log ("server startd"));