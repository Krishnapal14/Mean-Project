var http = require ("http")
var server = http.createServer(function(req,res){
     res.end("Welcome Krishnapal to your server" +req.url);  
});

//without Express module , in text/plain or text/HTML or text/json

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Welcome to Node Js Server");
    res.end();
});

//Route Without express module

var server = http.createServer(function(req,res){
     //Home Page
     if(req.url == "/"){
         res.writeHead(200,{"Content-Type":"text/html"});
         res.end("Welcome To Home Page");
     }//About page
     else if (req.url =="/about"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("Welcome To About Page");
     }// 404 Page
     else{
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("404 Not Found!!");
     } 
});


server.listen(9090);
console.log("Server Port Number 9090 is running");