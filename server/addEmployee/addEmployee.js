let mongodb = require("mongodb");
let project_client = mongodb.MongoClient();

//post - to read the data from client and post/store to mongobd sever.
//the data comining from client and it is stored in req object body part.

//insertOne to insert the record..
let addEmployee = require("express").Router().post("/", (req, res) => {
    let newRecord = {
        "Name": req.body.Name,
        "Age": req.body.Age,
        "empId": req.body.empId,
        "Salary": req.body.Salary,
        "Department": req.body.Department,
        "DOB": req.body.Department,
        "Gender": req.body.Gender,
        "languages": req.body.lnguages

    };
    project_client.connect('mongodb://localhost:27017/miniprojectdb', (err, db) => {
console.log("running")
        if (err) throw err;
        else {
            db.collection("employees").insertOne(newRecord,(err,result)=>{
                    if(err) throw err;
                else
                {
                    res.send({"key": "Record Insert Success"})
                }

            })
        }

    });

});

module.exports = addEmployee;