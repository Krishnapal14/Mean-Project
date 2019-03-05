let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/mydb";
mongoose.connect(url, { useNewUrlParser: true });
let Schema = mongoose.Schema;
let CourseSchema = new Schema({
   name: {type:String},
   description:{type: String}}, {collection:"course_link"});

let CourseModel = mongoose.model("course_link", CourseSchema);
module.exports = CourseModel;