const mongoose = require('mongoose');

const Personal = mongoose.model('Personal', {
  name: {
    type: String,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = Personal;
