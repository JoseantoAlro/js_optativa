function $(selector) {                                   //$ selecciona 1 y $$ selecciona todos
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}

function revelarSig(actual) {                               //revela el siguiente label completo(cambia la opacidad)
    actual.parentElement.nextElementSibling.classList.remove("oculto");
    actual.parentElement.nextElementSibling.classList.add("visible");
}

function alertaSpan(actual, mensaje){                       //añade un elemento span dentro del elemento padre(label) con un mensaje y una clase llamada alerta
    const span = document.createElement("span");
    span.textContent=mensaje
    span.classList.add("alerta");
    actual.parentElement.appendChild(span); 
}

function limpiarmensajes(self){                             //comprueba si la alerta se envio anteriormente y la borra para redesplegarla y que no se repita
    const span = self.parentElement.querySelector("span");
    if (span){
        span.remove();
    }
}

//validacion nombre
$("#nombre").addEventListener("change", function () {
    limpiarmensajes(this);
    if (this.value.length < 4) {
        alertaSpan(this,"Debe tener al menos 4 caracteres");
    } else {
        revelarSig(this);
    }
});



//validacion apellidos
$("#apellidos").addEventListener("change", function () {
    limpiarmensajes(this);
    if (this.value.split(" ").length != 2) {
        alertaSpan(this,"Debe ser 2 apellidos");
    } else {
        revelarSig(this);
    }
});

//validacion numero
$("#num").addEventListener("change", function () {        //que sea un numero y de solo 9 digitos
    limpiarmensajes(this);
    if (Number.isInteger(Number(this.value)) && this.value.length == 9) {
        revelarSig(this);
    } else {
        alertaSpan(this,"Introduzca un numero válido (9 digitos)")
    }
});

//validación email
$("#email").addEventListener("change", function () {
    limpiarmensajes(this);
    if (this.value.includes("@g.educaand.es")) {
        revelarSig(this);
    } else {
        alertaSpan(this,"Solo se admite correos @g.educaand.es")
    }
}); 

//validacion Fecha
$("#fecha").addEventListener("change", function () {
    limpiarmensajes(this);
    const hoy = new Date();
    const nac = new Date(this.value);
    var edad = hoy.getFullYear() - nac.getFullYear();

    if (hoy.getMonth() - nac.getMonth() < 0 || (hoy.getMonth() - nac.getMonth() == 0 && (hoy.getDay() - nac.getDay() < 0))) {  //esto es complicado de entender, 
        edad--;                                           //en resumen hace, por ejemplo, agosto(8) que estamos menos septiembre(9) que nació es <0, o si es el mismo mes(==0) hace lo mismo en dias
    }
    if (edad >= 18) {
        revelarSig(this);
    } else {
        alertaSpan(this,"Debe ser mayor de edad.")
    }
});


//validacion contraseña
var pass;                                               //pide una contraseña de 8 caracteres y la guarda
$("#pass").addEventListener("change", function () {
    limpiarmensajes(this);
    if (this.value.length < 8) {
        alertaSpan(this,"Debe tener al menos 8 caracteres");
    } else {
        pass = this.value;
        revelarSig(this);
    }
});

//validacion repetir contrañesa                     //comprueba si la contraseña es iguala la anterior
$("#pass2").addEventListener("change", function () {
    limpiarmensajes(this);
    if (this.value != pass) {
        alertaSpan(this,"Debe repetir la misma contraeña");
    } else {
        revelarSig(this);
    }
});

//validacion DNI                                    //comprueba q sean 9 caractereres( 8 nums y una letra)
$("#dni").addEventListener("change", function () {
    limpiarmensajes(this);
    let num = Number(this.value.substring(0, 8));
    let letra = (this.value.charAt(8));
    if (this.value.length == 9 && Number.isInteger(num) && letra.match(/[A-Z]/)) {
        revelarSig(this);
    } else {
        alertaSpan(this,"DNI no válido (8 números y 1 letra mayúscula)");
    }
})

//validacion check activo                           //evita desbloquear el checkbox para no recibir la publi
$("#publi").addEventListener("change", function () {
    limpiarmensajes(this);
    if (this.checked) {
        this.disabled = true;
        revelarSig(this);
    }
});

//validación boton final                                //resetea todo el formlario(clases visible-oculto y los valores)
$("#boton").addEventListener("click", function () {
    $$("label").forEach(function (label) {
        label.classList.remove("visible");
        label.classList.add("oculto");
    });
    $$("input").forEach(function (input) {
        input.value = "";
    })
    $("#publi").checked = false;
    $("#publi").disabled = false;
    $("#nombre").parentElement.classList.remove("oculto");
    $("#nombre").parentElement.classList.add("visible");
});
