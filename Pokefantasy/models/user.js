const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: String,
    apodo: String,
    foto: Image,
    correo: String,
    saldo: Float16Array,
    puntos: Int16Array
})

//Creamos el modelo
const user = mongoose.model('user', userSchema, "user");

module.exports = user;