const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const {DB} = require("mongodb")
const configDb = require("./config/db")
const controllers = require("./controllers/userController")
const routers = require('./routers/router');
const app = express();
const port = 7000

//midleware
app.use(express.urlencoded({
  extended: true
}));
app.use(routers)
app.use(controllers)
app.use(configDb)




app.listen(port,  () => {
  console.log("App listening on PORT PORT 7000" );
});