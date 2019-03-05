//console.log("Hello");
var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017";
const dbname = "mydb";
MongoClient.connect(uri, function(err, client) {
  if (err) {
    console.log("Error go connect the database " + err);
  } else {
    var db = client.db(dbname);
    console.log("Database Connected successfully");
    db.collection("Emp").find().toArray(function(err,doc) {
      if (err) {
      } else {
    //    console.log("Not Found");
    console.log("Number od recordsare "+doc.length);
    for(let i = 0; i<doc.length;i++){
        console.log("id is "+doc[i]._id+"Name is "+doc[i].Name);
    }
      }
    });
  }
  client.close();
});
