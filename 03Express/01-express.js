const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('pruebas', __dirname+'/prueba');
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
const user = 'jalvrom2609DB';
const password = 'INstituto012_';
const dbname = 'pokemon';
const uri = `mongodb+srv://${user}:${password}@clusterprueba.sjyco5a.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
