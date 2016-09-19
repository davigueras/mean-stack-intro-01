express = require('express');
// Intancia un objeto de tipo enrutador para luego ser exportado
var router = express.Router();

// Incluyo el modelo de datos de metales
var Metal = require('../models/metalModel');

// request get a metals raiz para obtener todos
router.route('/').get(function(req, res){
  Metal.find(function(err, metals){
    if (err) res.send(err);
    res.json(metals);
  });
});

// request post a metals raiz para nuevo item
router.route('/').post(function(req, res){
  var metal = new Metal();
  metal.name = req.body.name;
  metal.purity = req.body.purity;
  metal.save(function(err){
    if (err) res.send(err);
    res.json({ message: 'Metal created.' });
  });
});

// request get con id de metal para obtener item espcifico
router.route('/:metal_id').get(function(req, res){
  Metal.findById(req.params.metal_id, function(err, metal){
    if (err) res.send(err);
    res.json(metal);
  });
});

// request put con id de metal para update selectivo
router.route('/:metal_id').put(function(req, res){
  Metal.findById(req.params.metal_id, function(err, metal){
    if (err) res.send(err);
    metal.name = req.body.name;
    metal.purity = req.body.purity;
    metal.save(function(err){
      if (err) res.send(err);
      res.json({ message: 'Metal updated.' });
    });
  });
});

// request con delete para is de metal
router.route('/:metal_id').delete(function(req, res){
  Metal.remove({ _id: req.params.metal_id }, function(err, metal){
    if (err) res.send(err);
    res.json({ message: 'Metal succesfully deleted.' });
  });
});

// Esto permitirá a quin incluya este modulo, acceder al objeto router
module.exports = router;
