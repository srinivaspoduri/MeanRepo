let mongodb = require("mongodb")

let project_client = mongodb.MongoClient();

let deleteEmployee = require("express").Router().delete("/",(req,res)=>{
    
    project_client.connect('mongodb://localhost:27017/miniprojectdb',(err,db)=>{
    if(err) throw err;
    else
    {
        db.collection("employees").deleteOne({"empId": req.body.empId},(err,result)=>{
            if(err) throw err;
            else{
                res.send({"Delete":"Delete Success"})
            }

        });
    }

    })
});

module.exports=deleteEmployee;