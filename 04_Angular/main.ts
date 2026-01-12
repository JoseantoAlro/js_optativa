let saludos = (persona:String) => {
    return "hola, " + persona
}

const usuario: string = "Marcos";
let sentencia = `Hola, mi nombre es ${usuario}`
console.log(sentencia);
document.body.innerHTML = saludos(usuario)

export{};