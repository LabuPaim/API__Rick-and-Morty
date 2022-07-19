const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // user:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  name: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});


const Characters = mongoose.model('Characters', UserSchema);

module.exports = Characters;
