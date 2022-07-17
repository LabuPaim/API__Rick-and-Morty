const User = require('./User');

const service__all__EMAIL = (email) => User.findOne({ email: email });

const service__create__USER = (user) => User.create(user);

const service__all__USER = async () => {
  const user = await User.find();
  return user;
};

const service__byid__USER = async (id) => {
  const user = await User.findById(id);
  return user;
};

const service__update__USER = async (id, user__EDITED) => {
  const user__UPDATE = await User.findByIdAndUpdate(id, user__EDITED);
  return user__UPDATE;
};

const service__delete__USER = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  service__all__EMAIL,
  service__create__USER,
  service__all__USER,
  service__byid__USER,
  service__update__USER,
  service__delete__USER,
};
