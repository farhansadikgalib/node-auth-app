const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String,required: true},
    phone: {type: String,required: true,unique:true},
    email: {type: String,required: true,unique:true},
    gender: {type: String,required: true, enum:['male','female'],required:true},
    password: {type: String,required: true},
   

},{timestamps:true});

module.exports = mongoose.model('User', userSchema);