var findId = require("mongodb");
var mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/mydb";

mongoose.connect(uri, { useNewUrlParser: true });

var schema = mongoose.Schema;
var userSchema = new schema(
  [
    {
      name: { type: String, requried: true },
      age: { type: Number, required: true }
    },
    {
      name: { type: String, requried: true },
      age: { type: Number, required: true }
    },
    {
      name: { type: String, requried: true },
      age: { type: Number, required: true }
    },
    {
      name: { type: String, requried: true },
      age: { type: Number, required: true }
    },
    {
      name: { type: String, requried: true },
      age: { type: Number, required: true }
    }
  ],
//   { collection: "Emp_New" }
);
var db = mongoose.connection;
console.log("Database Connected...");
var empRef = db.model("", userSchema);
var empRef = db.model("Emp_New", userSchema);
if (err) {
    console.log("Error go connect the database " + err);
  } else {
    var db = client.db(dbname);
    console.log("Database Connected successfully");
    db.collection("Emp_New").find({_id:102}).toArray(function(err,doc) {
      if (err) {
      } else {
       console.log("Not Found");
      }
      db.close();
    });
  }

