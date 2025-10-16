function $(selector){
    return document.querySelector(selector);
}

function revelarSig(actual){ 
    actual.parentElement.nextElementSibling.classList.toggle("oculto");
    actual.parentElement.nextElementSibling.classList.toggle("visible"); //el togle nos servirta para el boton falso de siguiente check check
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
