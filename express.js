var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// app.get("/", function(req, res) {
//   console.log("get method");
//   res.send("Welcome To Express Get Method");
// });

app.use(bodyParser.json());
//support json encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Get Method

app.get("/checkUser", function(req, res) {
  var formName = req.query["user"];
  var formPass = req.query["password"];
  if (formName === "KP" && formPass === "123456") {
    //res.Write("SuccessFully Login");
    return res.redirect("https://www.google.com/");
  } else {
    res.write("Failure");
  }
  res.end();
});

//Post Method

app.post("/postCheckUser", function(req, res) {
  console.log("Post Method Call..");
  var name = req.body.user;
  var pass = req.body.password;
//   res.send("Post Method Called.." + name + pass);
if (name === "KP" && pass === "123456") {
    //res.Write("SuccessFully Login");
    return res.redirect("https://www.google.com/");
  } else {
    res.write("Failure");
  }
  res.end();
});

// Methods

app.get("/jsonData", function(re,res){
   var empInfo = {'id':100, "name":"Krishnapal", salary:15000}
   res.json(empInfo);
 });

app.get("/getMethod", function(re,res){
   console.log("Get Method");
   res.send("Get Method");
});
app.post("/postMethod", function(re,res){
    console.log("Post Method");
    res.send("Post Method");
 });
 app.put("/putMethod", function(re,res){
    console.log("Put Method");
    res.send("Put Method");
 });
 app.delete("/deleteMethod", function(re,res){
    console.log("Delete Method");
    res.send("Delete Method");
 });

app.listen(9900, function() {
  console.log("Express Server is running in port 9900");
});
