let mongodb = require("mongodb")

let project_client = mongodb.MongoClient();

//put -to update the existing record in db.

//$set used to override old data with new data -related to mangodb function.
//updateOne to update the record
let updateEmployee = require("express").Router().put("/", (req, res) => {
    let basedOnIDProperty = { "empId": req.body.empId }
    let NewProperties = {
        $set: {

            "Name": req.body.Name,
            "Age": req.body.Age,
            "empId": req.body.empId,
            "Salary": req.body.Salary,
            "Department": req.body.Department,
            "DOB": req.body.Department,
            "Gender": req.body.Gender,
            "languages": req.body.lnguages
        }
    }
    project_client.connect("mongodb://localhost:27017/miniprojectdb", (err, db) => {

        if (err) throw err;
        else {
                db.collection("employees").updateOne(basedOnIDProperty,NewProperties,(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({"update":"Record updated success"})
                    }

                })
        }

    })



});

module.exports = updateEmployee;