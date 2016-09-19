// Incluyo la libreria Mongoose
var mongoose = require('mongoose');
// carga en una variable la classe Schema;
var schema = mongoose.Schema;

// Instancia un objeto Schema de moongose y define una especificacion
var metalSchema = new schema({
  name: String,
  purity: Number
});

module.exports = mongoose.model('metalModel', metalSchema);
