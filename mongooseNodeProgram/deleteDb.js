var deleteId = require("mongodb");
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
  { collection: "Emp_New" }
);
var db = mongoose.connection;
db.once("open", function() {
  console.log("Database Connected...");
  var removeRec = { _id: deleteId.ObjectID("5c6bc5fa6023db2574955632") };
  db.collection("Emp_New").removeOne(removeRec, function(err, result) {
    if (err) {
      console.log("Error" + err);
    } else {
      if (result.deletedCount > 0) {
        console.log("Record Deleted Successfully");
      } else {
        console.log("Record Not Delete");
      }
    }
    db.close();
  });
});
