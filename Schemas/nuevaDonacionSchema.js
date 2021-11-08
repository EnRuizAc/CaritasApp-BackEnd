var mongoose = require ("mongoose")
var Schema = mongoose.Schema

var crearDonacion = new Schema({
    fecha_creacion: String,
    precio_total_recibido: Number,
    peso_total_reportado: Number,
    donador: {
        id : String,
        nombre : String},
    articulos_donados: [
        {
            "upc" : String,
            "cantidad_donada" : String,
            "precio_unitario" : String,
            "precio_total_unidades" : String,
            "numero_serie_externo" : String
        } 
    ]
})

const nuevaDonacion = mongoose.model("Nueva", crearDonacion)

module.exports = nuevaDonacion
