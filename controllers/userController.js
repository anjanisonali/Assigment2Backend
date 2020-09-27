const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const appRoute = express.Router();


appRoute.get('/user', (req, res) => {
    User.find()
    .populate('powers')
    .then((result) =>{
        res.status(200).send({
            msg : 'Success',
            data: result
        })
        .catch((err) => {
            res.status(500).send({
                msg: 'error fetch user', 
                data : err
            })
        })
    })
})

module.exports = appRoute;