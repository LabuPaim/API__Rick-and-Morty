const User = require('../users/User');

const service__LOGIN = (email) => User.findOne({email: email}).select('+password')

module.exports = {
  service__LOGIN,
};
