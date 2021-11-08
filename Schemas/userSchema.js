var mongoose = require ("mongoose")
var Schema = mongoose.Schema

var usuario = new Schema({

    apellidos: String,
    correo: String,
    entidad: String,
    nombres: String,
    rfc: String,
    rol: String

})

const Usuario = mongoose.model("Usuario", usuario)

module.exports = Usuario
