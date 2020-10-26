//import Mongodb module

//if mongo db module imported successfully ,it will return an object which  is stored in var mongodb.

let mongodb = require('mongodb')

//create the client to connect the mongodb from server(nodejs) as mongodb follows cs architecture
let project_client = mongodb.MongoClient();

//connet the client to server(mongoserver)

//to create the custome module (creating the separate module called routing)
//url pattern given to angular/react(client app) so that client able to connect.
//get -for get request.
//req object stores the data coming from client
//res object used to send the response to client.
//find to fetch the data.
let employees = require("express").Router().get("/", (req, res) => {

    //if client unable to connet db then err else it will return db instance.
    project_client.connect('mongodb://localhost:27017/miniprojectdb', (err, db) => {
        if (err) {
            throw err;

        }
        else {
            db.collection("employees").find().toArray((err, array) => {
                if (err) {
                    throw err;
                }
                else {
                    res.send(array)
                }
            });
        }
    })

});

//making the empolyees module as public so as to use by anyone.
module.exports = employees
