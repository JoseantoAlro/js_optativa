"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saludos = function (persona) {
    return "hola, " + persona;
};
var usuario = "Marcos";
var sentencia = "Hola, mi nombre es ".concat(usuario);
console.log(sentencia);
document.body.innerHTML = saludos(usuario);
