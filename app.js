const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routers = require('./routers/router');
const app = express();
const port = 7000

//midleware
app.use(express.urlencoded({
  extended: true
}));
app.use(routers)

mongoose.connect("mongodb://localhost/Assigment2Anjani", {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
});


const db = mongoose.connection;
db.on("error", console.error.bind("connection error"));
db.once("open", () => {
  console.log("connection Ok");
});

app.listen(port, () => {
  console.log("App listening on port" + port);
});