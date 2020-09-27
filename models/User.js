const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Townhall = require('../models/Townhall')
const Power = require('../models/Power')
const{
    Schema
}= mongoose;

// Schema

const userSchema = new Schema({
    username : {
        type: String,
    },
    email : {
        type: String,
        default : 'example@me.com'
    },
    password : {type: String, max: 7},


townhalls: [{
    type : Schema.Types.ObjectId,
    ref: 'Power'
}]

});

userSchema.pre('save', async function (next){
    console.log(this.username, 'Oke running')
    const salt = await bcrypt.genSalt(3)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash

    console.log(this.password)
    next()
})

const User = mongoose.model('User', userSchema);
module.exports = User;