const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Animal = require('./animal');

// CREATES A NEW ANIMAL
router.post('/', function (req, res) {
    Animal.create({
            name : req.body.name,
            species : req.body.species,
            race : req.body.race,
            dateOfBirth : req.body.dateOfBirth,
            dateOfAdmission : req.body.dateOfAdmission,
            condition : req.body.condition,
            status: '1'
        },
        function (err, animal) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(animal);
        });
});

// RETURNS ALL THE Animals IN THE DATABASE
router.get('/', function (req, res) {
    Animal.find({}, function (err, animals) {
        if (err) return res.status(500).send("There was a problem finding the animals.");
        res.status(200).send(animals);
    });
});

router.get('/:id', function(req, res){
  Animal.findById(req.params.id , function(err, user){
    if(err) return res.status(500).send("There was a problem finding the animal.");
    res.status(200).send(user);
  })
});

/*router.put('/:id', function(req, res){
  Animal.findByIdAndUpdate(req.params.id,{$inc: } function(err, user){
    if(err) return res.status(500).send("There was a problem finding the animal.");
    res.status(200).send(user);
  })
});

Animal.findByIdAndUpdate(req.body.idAnimal, {staus: '0'}, function (error, animal){
  if(error) return res.status(500).send("There was a problem adding the information to the database.");*/

module.exports = router;
