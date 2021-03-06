const Characters = require('./Characters');

// const service__create__CHARACTERS = (message, user__ID) => {
//   Characters.create({ message, user: user__ID });
// };

const service__create__CHARACTERS = (name, imageUrl, user__ID) => Characters.create({ name, imageUrl, user: user__ID });
const service__all__CHARACTERS = async () => {
  const character = await Characters.find().populate('user')
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

const service__byname__CHARACTERS = async (name) => {
  const character = await Characters.find({ name: { $regex: `${name || ''}`, $options: 'i' } })
    .populate('user');
    console.log(character);
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
