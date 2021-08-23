const mongoose = require('mongoose');
const uri =
  'mongodb+srv://NahuelOcampo:togo74N5@cluster0.6ytxl.mongodb.net/comision?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
