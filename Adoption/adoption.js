const mongoose = require('mongoose');
const AdoptionSchema = mongoose.Schema({
  idWorker: String,
  idAnimal: String,
  idOwner: String
});

mongoose.model('Adoption', AdoptionSchema);
module.exports = mongoose.model('Adoption');
