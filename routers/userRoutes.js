const express = require('express')
const userRoutes = express.Router()

const User = require('../models/User')

userRoutes.post("/register", (req, res) =>{
    const{
        username, 
        email, 
        password
    } = req.body;

    User.create({
        username : username,
        email : email,
        password : password,
    })
    .then((result) => {
        res.status(201).json({
            msg : "Success Created",
            data : result,
        });
    })
    .catch((err) =>{
        res.status(500).send({
            msg : "Error",
            details : err,
        });
    });
});

userRoutes.patch("/:id", (req, res) =>{
    const {TownhallID} = req.body;
    const {PowerID} = req.body;
    User.findByIdAndUpdate(
        req.params.userID, {
            $push: {
                townhalls: TownhallID
            },
            $push: {
                powers: 
                PowerID
            },

        },{
            new : true,
        }
    )
    .then((result) =>{
        res.status(200).send({
            msg: "Success",
            data : result,
        });
    })
    .catch((err) => {
        res.status(500).send({
            msg : "Failed",
            details : err,
        });
    });
});

module.exports = userRoutes;