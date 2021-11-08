var mongoose = require ("mongoose")
var Schema = mongoose.Schema

var articuloDonacion = new Schema({
    "UPC": String,
    "cantidad_donada" : Number,
    "cantidad_recibida" : Number,
    "cantidad_buen_estado" : Number,
    "precio_unitario" : Number,
    "precio_total_unidades" : Number,
    "numero_serie_externo" : String
})

const ArticuloDonacion = mongoose.model("ArticuloDonacion", articuloDonacion)

module.exports = ArticuloDonacion
