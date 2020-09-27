const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const authRoutes = express.Router()

authRoutes.post('/login', (req, res) =>{
    const{ 
        email, password
    } = req.body;


User.findOne({
    email : email

})
.then((result) => {
    if ((result) => {
        bcrypt.compare(password, result.password, (err, ismatch) =>{
            if (ismatch){
                console.log('Login Success')
            }else{
                console.log('Login Failed')
            }
        })
    })
if (password === result.password){
    res.status(200).json({
        msg : 'Login Success'
    })
}else{
    res.status(401).json({
        msg: 'Login Failed'
    })
}
})
.catch((err) =>{
    res.status(500).send({
        msg: err
    })
})


})
module.exports = authRoutes;