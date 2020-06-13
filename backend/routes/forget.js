const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const User = require("../models/register");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

let mailOptions = {
  from: "check.email.send@gmail.com",
  to: ``,
  cc: "",
  bcc: "",
  subject: "Forget Password",
  text: "",
};

router.post("/forget", async (req, res) => {
 // console.log("hello");
  // Create a secure token; 20 chars, expires in 6 hours.
  const token = crypto.randomBytes(20).toString("hex");
  const expiration = Date.now() + 21600000;
  const query = { email: req.body.email };

  const result = await User.findOne(
    query,
    {
      resetPasswordToken: token,
      resetPasswordTokenExpires: expiration,
    })
    //console.log("@@@"+result+req.body+transporter.auth.user);
      if (result) {
        mailOptions.to = req.body.email;
        mailOptions.text = `Hello ,                    
         your reset password link = http://localhost:4200/reset/${token}`;
        transporter.sendMail(mailOptions);
        res.json({
          message: `Sending a password reset email to ${req.body.email}.`,
        });
      } else {
        res.status(404).json({
          message: `Could not find ${req.body.email}`,
        });
      }
    }
)

module.exports = router;
