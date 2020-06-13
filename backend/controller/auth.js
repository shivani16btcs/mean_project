const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/register');
const passwordResetToken = require('../models/forgetpassword');
module.exports = {
  async CreateUser(req, res) {
    const userEmail = await User.findOne({
      email: req.body.email
    });
    if (userEmail) {
      return res
        .status(409)
        .json({ message: 'Email already exist' });
    }

    const userName = await User.findOne({
      username: req.body.username
    });
    if (userName) {
      return res
        .status(409)
        .json({ message: 'Username already exist' });
    }

    return bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res
          .status(400)
          .json({ message: 'Error hashing password' });
      }
      const body = {
        username: req.body.username,
        email: req.body.email,
        password: hash
      };
      User.create(body)
        .then(user => {
          res
          res.status(201) .json({ message: 'User created successfully', user });
        })
        .catch(() => {
          res
            .status(500)
            .json({ message: 'Error occured' });
        });
    });
  },
}
