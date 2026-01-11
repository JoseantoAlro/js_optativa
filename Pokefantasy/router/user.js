const express = require('express');
const router = express.Router();
const User = require('../models/user');



router.get('/crear', (req, res) =>{
    res.render('crear') //Nueva vista que debemos crear
})

router.get('/:id', async(req, res) => { //El id vendrá por el GET (barra de direcciones)
    const id = req.params.id //Recordemos que en la plantilla "user.ejs" le pusimos
    //a este campo user.id, por eso lo llamados con params.id
      try {
        const userDB = await User.findOne({ _id: id }) 
        console.log(userDB) //Para probarlo por consola
        res.render('detalles', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            user: userDB,
            error: false
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('detalles', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'usuario no encontrado'
        })
    }
})

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayUserDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayUser que tenemos EN LA VISTA

        console.log("Consultando colección:", User.collection.name);

        const arrayUserDB = await User.find();
        console.log("Resultados:", arrayUserDB);
        console.log(arrayUserDB);
        res.render("users", { 
            arrayUser: arrayUserDB
        })
    } catch (error) {
        console.error(error)
    }
})

router.post('/', async (req, res) => {

    const body = req.body // Gracias al body parser, de esta forma
    // podremos recuperar todo lo que viene del body

    console.log(body) // Para comprobarlo por pantalla

    try {

        const userDB = new User(body) // Creamos un nuevo usuario, gracias a Mongoose
        await userDB.save() // Lo guardamos con .save(), gracias a Mongoose
        res.redirect('/user') // Volvemos al listado

    } catch (error) {

        console.log('error', error)

    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        //En la documentación de Mongoose podremos encontrar la
        //siguiente función para eliminar
        const userDB = await User.findByIdAndDelete({ _id: id });
        console.log(userDB)
        // https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
        // res.redirect('/user') //Esto daría un error, tal y como podemos ver arriba
        if (!userDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el usuario.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Usuario eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const userDB = await User.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(userDB)
        res.json({
            estado: true,
            mensaje: 'usuario editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el usuario'
        })
    }
})


module.exports = router;