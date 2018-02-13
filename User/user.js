const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  phone: String
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
