const express = require('express') //Requerimos Express
const router = express.Router();

// Ahora, CORTAMOS del fichero principal 01-express.js
// las dos rutas que tenemos: la principal ( / ) y la 
// de contactos ( /contaco )
// Importante que ya no usaremos el app.get(...), ahora
//vamos a utilizar las rutas, por lo que deberemos poner:
router.get('/', (req, res) => {
    res.render("Inicio.ejs", { titulo: "Bienvenido al Inicio" })
})

router.get('/quienes_somos', (req, res) => {
    res.render("quienes_somos.ejs", { titulo: "¿Quienes somos?" })
})

router.get('/contacto', (req, res) => {
    res.render("contacto.ejs", { titulo: "Contactos" })
})



// Por último, vamos a exportarlo:
module.exports = router;