let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/mydb";
mongoose.connect(url, { useNewUrlParser: true });
let Schema = mongoose.Schema;
let EmpSchema = new Schema({
   name: {type:String},
   age: {type:Number},
   salary:{type:Number}}, {collection:"Emp_New"});

let EmpModel = mongoose.model("Emp_New", EmpSchema);
module.exports = EmpModel;