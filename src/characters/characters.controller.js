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

const controller__byid_CHARACTERS = async (req, res, next) => {
  const param__ID = req.params.id;
  const select__CHARACTERS = await service__CHARACTERS.service__byid__CHARACTERS(param__ID);
  if (!select__CHARACTERS) {
    return res.status(404).send({ message: 'Usuário não encontrado' });
  }
  res.send(select__CHARACTERS);
};

const controller__update_CHARACTERS = async (req, res, next) => {
  const param__ID = req.params.id;
  const character__EDITED = req.body;
  const character__UPDATE = await service__CHARACTERS.service__update__CHARACTERS(
    param__ID,
    character__EDITED,
  );
  res.send(character__UPDATE);
};

const controller__delete_CHARACTERS = async (req, res, next) => {
  const param__ID = req.params.id;
  await service__CHARACTERS.service__delete__CHARACTERS(param__ID);
  res.send({ message: 'Usuário deletado com sucesso!' });
};

const controller__byname_CHARACTERS = async (req, res, next) => {
  const param__ID = req.params.id;
  const select__CHARACTERS = await service__CHARACTERS.service__byname__CHARACTERS(param__ID);
  if (!select__CHARACTERS) {
    return res.status(404).send({ message: 'Usuário não encontrado' });
  }
  res.send(select__CHARACTERS);
};

module.exports = {
  controller__create_CHARACTERS,
  controller__all_CHARACTERS,
  controller__byid_CHARACTERS,
  controller__update_CHARACTERS,
  controller__delete_CHARACTERS,
  controller__byname_CHARACTERS,
};
