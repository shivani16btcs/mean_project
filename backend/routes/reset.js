const express = require('express');
const bcrypt=require('bcrypt');
const User=require('../models/register');
const router = express.Router();

router.post("/reset", async (req, res) => {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const query = {
            resetPasswordToken: req.body.token,
            resetPasswordTokenExpires: {
                $gt: Date.now()
            }
        }
        await User.findOneAndUpdate(query.resetPasswordToken, {
            password: hashedPassword,
            resetPasswordToken: null,
            resetPasswordTokenExpires: Date.now()

        }, (err, doc) => {
            if (!err && doc) {
                res.json({
                    message: `Password successfully reset for ${doc.email}.`
                })
            } else {
                res.status(400).json({
                    message: `This reset link is either invalid or expired; try again.`
                })
            }
        })
    })


module.exports = router








