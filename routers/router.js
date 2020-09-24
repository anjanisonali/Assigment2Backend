const express = require("express");
const Register = require("../models/Register");
const Login = require("../models/Login");
const User = require("../models/User");
const appRoute = express.Router();

// user

appRoute.post("/User", (req, res) => {
    const{ 
        name,
        email,
        password 
    } = req.body;

    register.create({ 
        name : name,
        email : email,
        password : password,
    })
    .then((result) => {
        res.status(201).json({
            msg : "Success Created",
            data : result,
        });
    })
    .catch((err) => {
        res.status(404).send({ 
            msg : "Not Found",
            details : err,
        });
    });
});

// POST Untuk creat new player

appRoute.post("/Register", (req, res) => {
  const { name, email, password } = req.body;
  Register.create({
    name: name,
    email: email,
    password: password,
  })
    .then((result) => {
      res.status(201).json({
        msg: "success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        msg: "Not Found register",
        details: err.message,
      });
    });
});

// Login

appRoute.post("/Login", (req, res) =>{
  const {email, password} = req.body;
  Login.create({
    email: email,
    password: password,
  })

Login.findOne({email: email})
.then((result) => {
    if (result) {
    if (password === result.password){
        res.status(200).json({
            msg : "Welcom in Arena",
        })
    }
}else{
        res.status(401).json({
            msg : "Wrong Email or Password combination",
        })
    }

})
.catch((err) =>{
    res.status(500).json({
        msg : "failed to fetch login",
        details : err,
    })
})
 
})


module.exports = appRoute;
