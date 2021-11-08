var mongoose = require ("mongoose")
var Schema = mongoose.Schema

var donacion = new Schema({

    //_id: String,
    estado_factura: {type: Boolean, default: "false"},
    fecha_creacion: {type:Date, default: new Date},
    fecha_recepcion: {type:Date, default: new Date},
    precio_total_reportado: Number,
    precio_total_recibido: {type: Number, default: 0},
    peso_total_reportado: Number,
    peso_total_recibido: {type: Number, default: 0},
    almacen_destino: {type: String, default: "0"},
    estado_recepcion_chofer: {type: Boolean, default: "false"},
    estado_recepcion_almacen: {type: Boolean, default: "false"},
    donador: {
        id : String,
        nombre : String},
    recolector: {
        id : String,
        nombre : String},
    articulos_donados: [
        {
            "UPC" : String,
            "cantidad_donada" : Number,
            "cantidad_recibida" : Number,
            "cantidad_buen_estado" : Number,
            "precio_unitario" : Number,
            "precio_total_unidades" : Number,
            "numero_serie_externo" : String
        } 
    ]
})

const Donacion = mongoose.model("Donacion", donacion)

module.exports = Donacion
