var mongoose = require('mongoose');

var registerSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minlength:5
    },

    email:{
        type:String,
       required:true,
        pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    },

    password:{
        type:String,
        required:true,
        pattern:'((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'
    },
  
    firstName:{
        type:String,
       required:true,
        minlength:2   
    },

    lastName:{
        type:String,
    },

    resetPasswordToken: {
        type: String,
        default: null
    },

    resetPasswordTokenExpires: {
        type: Date,
        required: true,
        default: Date.now
    }    
})
var Register = mongoose.model('Register', registerSchema);

module.exports = Register;





