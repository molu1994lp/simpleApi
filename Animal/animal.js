const mongoose = require('mongoose');
const AnimalSchema = new mongoose.Schema({
  name: String,
  species: String,
  race: String,
  dateOfBirth: String,
  dateOfAdmission: String,
  condition: String,
  status: String
});

mongoose.model('Animal', AnimalSchema);
module.exports = mongoose.model('Animal');
