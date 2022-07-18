const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  imagem: {
    type: String,
    required: true,
  },
});


const Characters = mongoose.model('Characters', UserSchema);

module.exports = Characters;
