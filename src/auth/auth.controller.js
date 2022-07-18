const service__AUTH = require('./auth.service');
const bcrypt = require('bcryptjs');

const controller__LOGIN = async (req, res) => {
  const { email, password } = req.body;
  const user = await service__AUTH.service__LOGIN(email)

  if (!user) {
    return res.status(403).send({ message: "Usuário não encontrado." });
  }

  const password__VALID = await bcrypt.compare(password, user.password)

  if (!password__VALID) {
    return res.status(403).send({ message: "Senha inválida"});
  }






  res.send(user);
};

module.exports = {
  controller__LOGIN,
};