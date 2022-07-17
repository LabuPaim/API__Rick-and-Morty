const service__USER = require('./users.service');

const controller__create_USER = async (req, res, next) => {
  const { name, username, email, password, avatar } = req.body;
  if (!name || !username || !email || !password) {
    return res.status(400).send({ message: 'Alguns campos estão faltando.' });
  }

  const user__FIND = await service__USER.service__all__EMAIL(email);
  if (user__FIND) {
    return res.status(400).send({ message: 'Usuário já existe.' });
  }

  const user = await service__USER
    .service__create__USER(req.body)
    .catch((err) => console.log(err.message));
  if (!user) {
    return res.status(400).send({ message: 'Erro ao criar usuário.' });
  }

  res.status(201).send(user);
};

const controller__all_USER = async (req, res, next) => {
  const users__ALL = await service__USER.service__all__USER();
  if (users__ALL.length === 0) {
    return res.status(404).send({ message: 'Não existe nenhuma usuário cadastrado' });
  }
  res.send(users__ALL);
};
const controller__byid_USER = async (req, res, next) => {
  const param__ID = req.params.id;
  const select__USER = await service__USER.service__byid__USER(param__ID);
  if (!select__USER) {
    return res.status(404).send({ message: 'Usuário não encontrado' });
  }
  res.send(select__USER);
};
const controller__update_USER = async (req, res, next) => {
  const param__ID = req.params.id;
  const user__EDITED = req.body;
  const user__UPDATE = await service__USER.service__update__USER(param__ID, user__EDITED);
  res.send(user__UPDATE);
};
const controller__delete_USER = async (req, res, next) => {
  const param__ID = req.params.id;
  await service__USER.service__delete__USER(param__ID);
  res.send({ message: 'Usuário deletado com sucesso!' });
};

module.exports = {
  controller__create_USER,
  controller__all_USER,
  controller__byid_USER,
  controller__update_USER,
  controller__delete_USER,
};
