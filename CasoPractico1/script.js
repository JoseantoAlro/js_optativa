function $(selector){
    return document.querySelector(selector);
}

function revelarSig(actual){ 
    actual.parentElement.nextElementSibling.classList.remove("oculto");
    actual.parentElement.nextElementSibling.classList.add("visible"); //el togle nos servirta para el boton falso de siguiente check check
}

//validacion nombre
$("#nombre").addEventListener("change", function(){
    if (this.value.length <4) {
        alert("Debe tener al menos 4 caracteres el nombre");
    }else{
        revelarSig(this);
    }
});

//validacion apellidos
$("#apellidos").addEventListener("change", function(){
    if(this.value.split(" ").length != 2){
        alert("Debe ser 2 apellidos");
    }else{
        revelarSig(this);
    }
});

//validacion numero
$("#num").addEventListener("change", function(){
    if(Number.isInteger(Number(this.value)) && this.value.length ==9){
        revelarSig(this);
    }else{
        alert("Introduzca un numero válido (9 digitos)")
    }
});

//validación email
$("#email").addEventListener("change", function(){
    if(this.value.includes("@g.educaand.es")){
        revelarSig(this);
    }else{
        alert("Correo no válido. Debe acabar en @g.educaand.es")
    }
});

//validacion Fecha
$("#fecha").addEventListener("change", function(){
    const hoy = new Date();
    const nac = this.value;
    var edad = hoy.getFullYear()-nac.getFullYear();

    if(hoy.getMonth()-nac.getMonth()<0 || (hoy.getMonth()-nac.getMonth()==0 && (hoy.getDay()-nac.getDay()<0))){  //esto es un lio,en meses si hoy menos ayer 
        edad--;                                                                             //en plan es agosto menos septiembre q nació es <0 y si es el mismo mes hace lo mismo en dias
    }

    if(edad>=18){
        revelarSig(this);
    }else{
        alert("Debe ser mayor de edad.")
    }
});
var pass;
//validacion contraseña
$("#pass").addEventListener("change", function(){
    if (this.value.length <8) {
        alert("Debe tener al menos 8 caracteres el nombre");
    }else{
        pass= this.value;
        revelarSig(this);
    }
});

//validacion contrañesa 2
$("#pass2").addEventListener("change", function(){
    if(this.value != pass){
        alert("Debe repetir la misma contraeña");
    }else{
        revelarSig(this);
    }
});
