// Incluyo la libreria Mongoose
var mongoose = require('mongoose');
// carga en una variable la classe Schema;
var schema = mongoose.Schema;

// Instancia un objeto Schema de moongose y define una especificacion
var fruitSchema = new schema({
  name: String,
  size: Number,
  origin: String
});

module.exports = mongoose.model('fruitModel', fruitSchema);
