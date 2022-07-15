const User = require('./User');

const service__all__EMAIL = (email) => User.findOne({ email: email });

const service__CREATE__USER = (user) => User.create(user);

module.exports = { service__all__EMAIL, service__CREATE__USER };
