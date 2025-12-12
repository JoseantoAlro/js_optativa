const express = require('express')
const bodyParser = require('body-parser')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));    //acceso a carpeta public pero con la ruta absoluta

app.use('views', express.static(__dirname + '/views'));

app.use('/', require('./router/rutas'));
app.use('/contacto', require('./router/rutas'));
app.use('/pokemon', require('./router/pokemon'));


//usar un html de public
app.use((req,res) => {      //para cuando no encuentra una ruta
  res.status(404).sendFile(__dirname+"/public//html/404.html")
})

//Conexión a base de datos
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@clusterprueba.sjyco5a.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
