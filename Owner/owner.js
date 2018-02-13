const mongoose = require('mongoose');
const OwnerSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  phone: String,
  city: String,
  street: String,
  code: String
});

mongoose.model('Owner', OwnerSchema);
module.exports = mongoose.model('Owner');
