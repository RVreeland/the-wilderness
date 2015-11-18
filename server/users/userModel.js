var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true,
    unique: true
  },
  lastname: {
    type: String,
    required: true,
    unique: true
  },
  date: { type: Date, default: Date.now },
  password: {
    type: String,
    required: true
  },
  salt: String,
  gear: Array
});

module.exports = mongoose.model('users', UserSchema);
