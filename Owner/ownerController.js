const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Owner = require('./owner');
router.post('/', function (req, res) {
Owner.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        street: req.body.street,
        code: req.body.code
    },
    function (err, owner) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(owner);
    });
});

router.get('/', function (req, res) {
    Owner.find({}, function (err, owner) {
        if (err) return res.status(500).send("There was a problem finding the owners.");
        res.status(200).send(owner);
    });
});

router.get('/:id', function(req, res){
  Owner.findById(req.params.id , function(err, user){
    if(err) return res.status(500).send("There was a problem finding the owner.");
    res.status(200).send(user);
  })
});


module.exports = router;
