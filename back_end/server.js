var express = require("express")
const server = express()

const bodyParser = require('body-parser');

const parser = require("body-parser")
server.use(express.urlencoded({ extended:true }))
server.use(bodyParser.json());

const bodyparser = require('body-parser');
const register = require("./src/routes/registration");
const loginRoute = require("./src/routes/login");
const addingdrs = require("./src/routes/AddingDR");
const imagegetting = require("./src/routes/imagegetting");
const token_booking = require("./src/routes/Token_booking");
server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
next();
});


server.use("/register" ,register)
server.use("/login" ,loginRoute)

server.use("/addingdr" ,addingdrs)

server.use ("/imagegetting",imagegetting)
server.use ("/token_booking",token_booking)




server.listen(5000,()=>{
    console.log("start server ","http://localhost:5000");
 })