const mongoose = require('mongoose')
const Schema = mongoose.Schema


const registerSchema = new Schema({
   name : { 
       type : String, 
       minlength : 3,
   },
    email : { 
        type : String, 
        default : 'email@mail.com',
    },
    password : {
        type : String,
    },

})



const Register = mongoose.model('Register', registerSchema);
module.exports = Register;