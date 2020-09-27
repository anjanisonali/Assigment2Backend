const express = require('express');
const mongoose = require('mongoose');
const routeDb = express.Router();

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

module.exports = routeDb;