const Characters = require('./Characters');

// const service__create__CHARACTERS = (message, user__ID) => {
//   Characters.create({ message, user: user__ID });
// };

const service__create__CHARACTERS = (character) => Characters.create(character);
const service__all__CHARACTERS = async () => {
  const character = await Characters.find();
  return character;
};

module.exports = { service__create__CHARACTERS, service__all__CHARACTERS };
