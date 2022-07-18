const Characters = require('./Characters');

// const service__create__CHARACTERS = (message, user__ID) => {
//   Characters.create({ message, user: user__ID });
// };

const service__create__CHARACTERS = (character) => Characters.create(character);
const service__all__CHARACTERS = async () => {
  const character = await Characters.find();
  return character;
};

const service__byid__CHARACTERS = async (id) => {
  const character = await Characters.findById(id);
  return character;
};

const service__update__CHARACTERS = async (id, character__EDITED) => {
  const character__UPDATE = await Characters.findByIdAndUpdate(id, character__EDITED);
  return character__UPDATE;
};

const service__delete__CHARACTERS = async (id) => {
  return await Characters.findByIdAndDelete(id);
};

const service__byname__CHARACTERS = async (charac) => {
  const character = await Characters.map(charac.name);
  return character;
};

module.exports = {
  service__create__CHARACTERS,
  service__all__CHARACTERS,
  service__byid__CHARACTERS,
  service__update__CHARACTERS,
  service__delete__CHARACTERS,
  service__byname__CHARACTERS,
};
