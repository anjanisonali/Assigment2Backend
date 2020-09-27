const express = require('express')
const powerRoutes = express.Router();
const Power = require('../models/Power')

powerRoutes.post("/", (req, res) =>{
    const {
        health, 
        meals,
        power
    } = req.body;
    Power.create({ 
        health : health,
        meals : meals,
        power : power,
    })
    .then ((result) => {
        res.status(201).send({
            msg : "Power add",
            details : err.msg
        });
    });
});

module.exports = powerRoutes;