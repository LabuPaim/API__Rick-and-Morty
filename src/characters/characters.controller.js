const service__CHARACTERS = require('./characters.service');
const auth = require('../auth/auth.middleware');

const controller__create_CHARACTERS = async (req, res, next) => {
  try {
    const { name, imageUrl } = req.body;

    const { id } = await service__CHARACTERS.service__create__CHARACTERS(
      name,
      imageUrl,
      req.user__ID,
    );

    res.status(201).send({
      message: 'created',
      characters: { id, name, imageUrl },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const controller__all_CHARACTERS = async (req, res, next) => {
  const character__ALL = await service__CHARACTERS.service__all__CHARACTERS();
  if (character__ALL.length === 0) {
    return res.status(404).send({ message: 'Não existe nenhuma Character cadastrado' });
  }

  res.send({
    results: character__ALL.map((character) => ({
      id: character._id,
      user: character.user,
      name: character.name,
      imageUrl: character.imageUrl,
    })),
    total: character__ALL.length,
  });
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
  const param__NAME = req.query.name;
  const select__CHARACTERS = await service__CHARACTERS.service__byname__CHARACTERS(param__NAME);
  console.log(select__CHARACTERS);
  if (!select__CHARACTERS) {
    return res.status(404).send({ message: 'Usuário não encontrado' });
  }
  res.send({
    characters: select__CHARACTERS.map((character) => ({
      id: character._id,
      user: character.user,
      name: character.name,
      imageUrl: character.imageUrl,
    })),
    total: select__CHARACTERS.length,
  });
};

module.exports = {
  controller__create_CHARACTERS,
  controller__all_CHARACTERS,
  controller__byid_CHARACTERS,
  controller__update_CHARACTERS,
  controller__delete_CHARACTERS,
  controller__byname_CHARACTERS,
};
