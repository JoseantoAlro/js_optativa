const express = require('express') 
const router = express.Router();

router.get('/', (req, res) => {
    res.render("nuestras_escuelas", { //pokemon será el próximo fichero que creemos, AÚN NO EXISTE
        arrayEscuelas: [ //Esta información, posteriormente, VENDRÁ DE LA BASE DE DATOS
            {id: '01', nombre: 'Torre de los guzmanes', tipo: 'Secundaria y Bachiller', descripcion:'Instituto en la lagaba'},
            {id: '02', nombre: 'IES Isbylia', tipo: 'Secundaria y Bachiller', descripcion:'Institutlo trilingue'},
            {id: '03', nombre: 'San juan bosco', tipo: 'Primaria y secundaria', descripcion:'Colegio concertado'}
        ]
    })
})

module.exports = router;