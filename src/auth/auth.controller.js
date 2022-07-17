const service__AUTH = require('./auth.service');

const controller__LOGIN = async (req, res) => {
  res.send({ message: 'Logado' });
};

module.exports = {
  controller__LOGIN,
};
