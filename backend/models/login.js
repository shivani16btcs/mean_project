var mongoose = require('mongoose');

var registerSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    }
})
var Login = mongoose.model('Login', registerSchema);

module.exports = Login;





