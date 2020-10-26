let express = require("express")

let app = express();//app is the master object by using express module -master obj is used to colloborate the modules.


//body-parser module used to accept the data form client(UI)

let bodyparser = require("body-parser");
//setting the communication between client (angular) and server(node)
//it wont support other formats,cient should send only json format
app.use(bodyparser.json())
//after server reciving the json , server should parse/read the data.
//extended:false means read the data coming from client.
app.use(bodyparser.urlencoded({extended:false}))

//enable to ports communiction
let cors = require("cors")
app.use(cors())

app.use("/fetch",require("./employee/getAllEmployee"))//to get all employee
app.use("/update",require("./updateEmployee/updateEmployee"))// to update employee
app.use("/insert",require("./addEmployee/addEmployee"))//to add employee
app.use("/delete",require("./deleteEmployee/deleteEmployee")) //to delete employee

app.listen(8080);