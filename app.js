const express = require('express');
const app = express();

const db = require('./db');

const UserController = require('./User/userController');
app.use('/users', UserController);

const AnimalController = require('./Animal/animalController');
app.use('/animals', AnimalController);

const OwnerController = require('./Owner/ownerController');
app.use('/owners', OwnerController);

const AdoptionController = require('./Adoption/adoptionController');
app.use('/adoption', AdoptionController);

module.exports = app;
