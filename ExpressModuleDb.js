var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Db Module
var mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/mydb";
mongoose.connect(uri, { useNewUrlParser: true });

var schema = mongoose.Schema;
var userSchema = new schema(
  {
    name: { type: String, requried: true },
    age: { type: Number, required: true }
  },
  { collection: "Emp_New" }
);
db = mongoose.connection;
app.get("/jsonEmp", function(req,res){
    console.log("Database Connected...");
    var empRef = db.model("Emp_New", userSchema);
    empRef.find({}, function(
      err,
      empInfo
    ) {
      if (err) {
        console.log("Error Generated" + err);
      } else {
        console.log(empInfo);
        res.json(empInfo);
        res.end("Done With your data");
      }
      db.close();
    });
   
  });
app.listen(9900, function() {
  console.log("Express Server is running in port 9900");
});