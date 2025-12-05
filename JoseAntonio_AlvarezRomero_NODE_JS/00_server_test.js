const express = require('express')
const app = express()
const hostname = 'localhost';
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));    //acceso a carpeta public pero con la ruta absoluta

app.use('views', express.static(__dirname + '/views'));

app.use('/', require('./router/rutas'));
app.use('/contacto', require('./router/rutas'));
app.use('/nuestas_escuelas', require('./router/rutas'));
app.use('/quienes_somos', require('./router/rutas'));
app.use('/nuestras_escuelas', require('./router/nuestras_escuelas'));


//usar un html de public
app.use((req,res) => {      //para cuando no encuentra una ruta
  res.status(404).sendFile(__dirname+"/public/public/404.html")
})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
