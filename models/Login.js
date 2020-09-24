const mongoose = require('mongoose');
const  {
    Schema
} = mongoose;
//ini baru di oush
//ini dari gitu

const loginuserSchema = new Schema({
    email : String,
    password : String,
})

const Login = mongoose.model('Login', loginuserSchema);
module.exports = Login;
//wkw kwkwkwkw
//skrg kamu coba oush yang ini