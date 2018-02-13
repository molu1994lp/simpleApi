const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Adoption = require('./adoption');
const Animal = require('../Animal/animal');

router.post('/', function (req, res) {
Adoption.create({
        idWorker : req.body.idWorker,
        idAnimal : req.body.idAnimal,
        idOwner : req.body.idOwner
    },
    function (err, adoption) {
        if (err) {return res.status(500).send("There was a problem adding the information to the database.");}
        else{
          console.log(req.body.idAnimal);
          Animal.findByIdAndUpdate(req.body.idAnimal, {$set: {'status': '0'}}, function (error, animal){
            if(error) return res.status(500).send("There was a problem adding the information to the database.")
            res.status(200).send(adoption);
          });
        }
      });
    });
//});

router.get('/', function (req, res) {
    Adoption.find({}, function (err, adoption) {
        if (err) return res.status(500).send("There was a problem finding the adoptions.");
        res.status(200).send(adoption);
    });
});

router.get('/:id', function(req, res){
  Adoption.findById(req.params.id , function(err, user){
    if(err) return res.status(500).send("There was a problem finding the adoption.");
    res.status(200).send(user);
  })
});

module.exports = router;
