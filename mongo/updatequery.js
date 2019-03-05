//console.log("Hello");
var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017";
const dbname = "mydb";
MongoClient.connect(uri, function(err, client) {
    if (err) {
        console.log("Error go connect the database " + err)
    } else {
        var db = client.db(dbname);
        console.log("Database Connected successfully");
       var condition = {_id:102};
       var updatevalue = {Name:"Raj Deep"};

        // var emp1 = {
        //     _id: 101,
        //     Name: "Ravi"
        // };
        // var emp2 = {
        //     _id: 102,
        //     Name: "Raj"
        // };
        // var emp3 = {
        //     _id: 104,
        //     Name: "Ramesh"
        // };
        // var emp4 = {
        //     _id: 105,
        //     Name: "Ram"
        // };
        db.collection("Emp").updateOne(condition,{$set:updatevalue}, function(err, result) {
            if (err) {
                console.log("Error" + err)
            } else {
                console.log("Record inserted successfully.. +result.modifiedCount");
            }
        });
    }
    client.close();
})