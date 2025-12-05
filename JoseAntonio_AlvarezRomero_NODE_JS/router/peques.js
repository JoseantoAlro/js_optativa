const express = require('express') 
const router = express.Router();

router.get('/', (req, res) => {
    res.render("peques", { //pokemon será el próximo fichero que creemos, AÚN NO EXISTE
        arrayPeques: [ //Esta información, posteriormente, VENDRÁ DE LA BASE DE DATOS
            {id: '01', nombre: 'Juan', Apellidos: 'Martinez Martinez', edad:'7'},
            {id: '02', nombre: 'Maria',  Apellidos: 'Hernandez Hernandez', edad:'6'},
            {id: '03', nombre: 'Rafael',  Apellidos: 'Álvarez Álvarez', edad:'7'}
        ]
    })
})

module.exports = router;