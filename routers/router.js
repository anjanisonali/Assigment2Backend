const express = require("express");
const Login = require("../models/Login");
const Power = require("../models/Power");
const Townhall = require("../models/Townhall");
const controllers = require("../controllers/userController");
const userRoutes = require("./userRoutes")
const powerRoutes = require("./powerRoutes")
const appRoute = express.Router();

// take userRoutes
appRoute.use('/user', userRoutes);
appRoute.use('/power', powerRoutes);


appRoute.post("/townhall", (req, res) => {
    const{
        townhalltype
    } = req.body;

    Townhall.create({ 
        townhalltype: townhalltype,
    })
    .then((result) => {
        res.status(201).send({
            msg :"Success Created",
            data: result
        });
    })
    .catch((err) => {
        res.status(500).send({
            msg : "Error can not Created",
            result: err
        });
    });
});


module.exports = appRoute;
