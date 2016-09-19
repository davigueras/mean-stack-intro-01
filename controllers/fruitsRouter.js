var express = require('express');
// Intancia un objeto de tipo enrutador para luego ser exportado
var router = express.Router();

// Incluyo el modelo de datos de frutas
var Fruit = require('../models/fruitModel');

// request get a fruits raiz para obtener todos
router.route('/').get(function(req, res){
  Fruit.find(function(err, fruits){
    if (err) res.send(err);
    res.json(fruits);
  });
});

// request post a fruits raiz para nuevo item
router.route('/').post(function(req, res){
  var fruit = new Fruit();
  fruit.name = req.body.name;
  fruit.size = req.body.size;
  fruit.origin = req.body.origin;
  fruit.save(function(err){
    if (err) res.send(err);
    res.json({ message: 'Fruit created.' });
  });
});

// request get con id de fruit para obtener item espcifico
router.route('/:fruit_id').get(function(req, res){
  Fruit.findById(req.params.fruit_id, function(err, fruit){
    if (err) res.send(err);
    res.json(fruit);
  });
});

// request put con id de fruit para update selectivo
router.route('/:fruit_id').put(function(req, res){
  Fruit.findById(req.params.fruit_id, function(err, fruit){
    if (err) res.send(err);
    fruit.name = req.body.name;
    fruit.size = req.body.size;
    fruit.origin = req.body.origin;
    fruit.save(function(err){
      if (err) res.send(err);
      res.json({ message: 'Fruit updated.' });
    });
  });
});

// request con delete para is de fruit
router.route('/:fruit_id').delete(function(req, res){
  Fruit.remove({ _id: req.params.fruit_id }, function(err, fruit){
    if (err) res.send(err);
    res.json({ message: 'Fruit succesfully deleted.' });
  });
});

// Esto permitirá a quin incluya este modulo, acceder al objeto router
module.exports = router;
