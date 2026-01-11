const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: String,
    apodo: String,
    foto: String,
    correo: String, 
    saldo: Number,  
    puntos: Number,
})

//Creamos el modelo
const user = mongoose.model('User', userSchema, "users");

module.exports = user;