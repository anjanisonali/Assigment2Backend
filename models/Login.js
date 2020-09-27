const mongoose = require('mongoose');
const  {
    Schema
} = mongoose;

const loginuserSchema = new Schema({
    email : String,
    password : String,
})

const Login = mongoose.model('Login', loginuserSchema);
module.exports = Login;