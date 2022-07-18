const service__CHARACTERS = require('./characters.service');

const controller__create_CHARACTERS = async (req, res, next) => {
  const { name, imagem } = req.body;
  if (!name || !imagem) {
    return res.status(400).send({ message: 'Alguns campos estão faltando.' });
  }

  const character = await service__CHARACTERS
    .service__create__CHARACTERS(req.body)
    .catch((err) => console.log(err.message));
  if (!character) {
    return res.status(400).send({ message: 'Erro ao criar usuário.' });
  }

  res.status(201).send({ character: { id: character.id, name, imagem } });
};

const controller__all_CHARACTERS = async (req, res, next) => {
  const character__ALL = await service__CHARACTERS.service__all__CHARACTERS();
  if (character__ALL.length === 0) {
    return res.status(404).send({ message: 'Não existe nenhuma Character cadastrado' });
  }
  res.send(character__ALL);
};

module.exports = { controller__create_CHARACTERS, controller__all_CHARACTERS };
