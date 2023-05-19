const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname:String,
    lname:String,
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    verify:{
        type:Boolean,
        default:false,
    },
  });

  module.exports = mongoose.model('User',userSchema)