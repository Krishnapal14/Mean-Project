//All modules loaded..
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/mydb";
let app = express();
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection;
app.use(bodyParser.json()); //converting json req data
app.use(bodyParser.urlencoded({ extended: true })); //unable to read & post,put and delete body data
const port = 9999;
let emp = require("./router/emp.router.js");
app.use("/course", course); //middleware

app.listen(port, function() {
  console.log(`The server is running on port number as ${port}`);
});
