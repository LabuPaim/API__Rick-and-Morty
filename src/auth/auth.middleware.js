require('dotenv').config();
const jwt = require('jsonwebtoken');
const { service__byid__USER } = require('../users/users.service');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const parts = authHeader.split(' ');
  const [scheme, token] = parts;
  if (!authHeader || parts.length !== 2 || !/^Bearer$/i.test(scheme)) {
    return res.status(403).send({ message: 'Token não informado' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const users = await service__byid__USER(decoded.id);
    if (!users || !users.id || err) {
      return res.status(403).send({ message: 'Token inválido' });
    }

    req.user__ID = users.id;
    return next();
  });
};
