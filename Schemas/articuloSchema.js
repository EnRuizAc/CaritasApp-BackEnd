var mongoose = require ("mongoose")
var Schema = mongoose.Schema

var articulo = new Schema({

    descripcion: String,
    uom: String,
    upc: String,
    peso_articulo_kg: String
})

const Articulo = mongoose.model("Articulo", articulo)

module.exports = Articulo
