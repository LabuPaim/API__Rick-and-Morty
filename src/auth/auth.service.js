require("dotenv").config();
const User = require('../users/User');
const jwt = require("jsonwebtoken");

const token__GENERATE = (userId) => jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: "12h" });

const service__LOGIN = (email) => User.findOne({email: email}).select('+password')

module.exports = {
  service__LOGIN,
  token__GENERATE
};
