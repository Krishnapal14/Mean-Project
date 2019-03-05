let CourseModel = require("../model/emp.model.js");

exports.getEmpTest = function(req, res) {
  console.log("Simple Test Msg");
  res.send("Welcome to Test Code...");
};
exports.getEmpJson = function(req, res) {
  let emp = [
    { id: 100, Name: "KP", Salary: 15000 },
    { id: 101, Name: "Krishna", Salary: 25000 },
    { id: 102, Name: "Rahul", Salary: 35000 },
    { id: 103, Name: "Raj", Salary: 45000 },
    { id: 104, Name: "Ravi", Salary: 55000 },
    { id: 105, Name: "Gulshan", Salary: 65000 },
    { id: 106, Name: "Ramesh", Salary: 75000 },
    { id: 107, Name: "Suresh", Salary: 85000 }
  ];
  res.json(emp);
};

exports.getEmpInfoDb = function(req, res) {
  CourseModel.find({}, function(err, empRec) {
    if (err) {
      res.send(err);
    } else {
      res.send(empRec);
    }
  });
};

//store Employee data
exports.postEmpDbStore = function(req, res) {
  let emp = new CourseModel({
    name: req.body.name,
    age: req.body.age
  });
  emp.save(function(err, result) {
    if (err) {
      console.log("Error generated" + err);
    } else {
      res.send("Record Successfull" + result);
    }
  });
};

//Update Employee Details In DB

exports.updateEmpInfo = function(req, res) {
  var empName = req.Name;
  var empAge = req.body.age;
  CourseModel.updateOne({ name: empName }, { $set: { age: empAge } }, function(
    err,
    result
  ) {
    if (!err) {
      res.send("Record updated Successfully....." + result);
    }
  });
};

//Delete Employee Details in DB
exports.delEmpInfo = function(req,res){
    var empName = req.body.name;
    CourseModel.deleteOne({name:empName}, function(err,result){
        if(!err){
            res.send("Record Deleted Successfully..." +result);
        }
    });
}
