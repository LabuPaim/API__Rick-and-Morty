const service__USER = require('./users.service');

const controller__CREATE_USER = async (req, res, next) => {
  const { name, username, email, password, avatar } = req.body;
  if (!name || !username || !email || !password) {
    return res.status(400).send({ message: 'Alguns campos estão faltando.' });
  }

  const user__FIND = await service__USER.service__all__EMAIL(email);
  if (user__FIND) {
    return res.status(400).send({ message: 'Usuário já existe.' });
  }

  const user = await service__USER
    .service__CREATE__USER(req.body)
    .catch((err) => console.log(err.message));
  if (!user) {
    return res.status(400).send({ message: 'Erro ao criar usuário.' });
  }

  res.status(201).send(user);
};

const controller__ALL_USER = async (req, res, next) => {
  res.send({ message: 'Find all users' });
};
const controller__BYID_USER = async (req, res, next) => {
  res.send({ message: 'Find all users' });
};
const controller__UPDATE_USER = async (req, res, next) => {
  res.send({ message: 'Find all users' });
};
const controller__DELETE_USER = async (req, res, next) => {
  res.send({ message: 'Find all users' });
};

module.exports = {
  controller__CREATE_USER,
  controller__ALL_USER,
  controller__BYID_USER,
  controller__UPDATE_USER,
  controller__DELETE_USER,
};
