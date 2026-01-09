const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/crear', (req, res) =>{
    res.render('crear') //Nueva vista que debemos crear
})

router.get('/:id', async(req, res) => { //El id vendrá por el GET (barra de direcciones)
    const id = req.params.id //Recordemos que en la plantilla "pokemon.ejs" le pusimos
    //a este campo pokemon.id, por eso lo llamados con params.id
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
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayPokemonDB = await User.find();
        console.log(arrayPokemonDB);
        res.render("pokemon", { 
            arrayPokemon: arrayPokemonDB
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

        const pokemonDB = new User(body) // Creamos un nuevo Pokemon, gracias a Mongoose
        await pokemonDB.save() // Lo guardamos con .save(), gracias a Mongoose
        res.redirect('/pokemon') // Volvemos al listado

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
        const pokemonDB = await User.findByIdAndDelete({ _id: id });
        console.log(pokemonDB)
        // https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
        // res.redirect('/pokemon') //Esto daría un error, tal y como podemos ver arriba
        if (!pokemonDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el Pokémon.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Pokémon eliminado.'
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
        const pokemonDB = await User.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(pokemonDB)
        res.json({
            estado: true,
            mensaje: 'Pokémon editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el Pokémon'
        })
    }
})


module.exports = router;