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
var db = mongoose.connection;
db.once("open", function() {
  console.log("Database Connected...");
  var empRef = db.model("", userSchema);
  var condition = { name: "KP" };
  var updateValue = { age: 29 };
  var emp1 = { name: "KP", age: "27" };
  empRef.findOneAndUpdate(condition, { $set: updateValue }, function(
    err,
    result
  ) {
    if (err) {
      console.log("Error Generated" + err);
    } else {
      console.log("Record Inserted" + result);
    }
    db.close();
  });
});
