const User = require('../models/register');
const bcrypt=require('bcrypt');
const nodemailer=require('nodemailer');

let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});


let mailOptions={
    from:'check.email.send@gmail.com',
    to:``,
    cc:'',
    bcc:'',
    subject:'wellcome! registration sucessfull',
    text:''
}

exports.registerUser = async function (data) {
    const existinguser =await User.findOne({email:data.email}) ;
    if(existinguser){
        console.log('this user is already registered');
        return(false);
    }
    else{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(data.password, salt)
    data.password=hashedPassword;
    const user =await new User(data);
    mailOptions.to=data.email;
    mailOptions.text=
    `Hello ${data.firstName},
    Wellcome from PPL!
    Thank you for registering with us`
    transporter.sendMail(mailOptions)
    return user.save(); 
    }
};



