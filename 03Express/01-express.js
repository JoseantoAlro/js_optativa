const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));    //acceso a carpeta public pero con la ruta absoluta

app.use('views', express.static(__dirname + '/views'));

app.use('/', require('./router/rutas'));
app.use('/contacto', require('./router/rutas'));
app.use('/pokemon', require('./router/pokemon'));

//app.get('/', (req, res) => {
  //console.log(__dirname)  //pintar ruta en consola
  //res.render("index", {titulo : "mi titulo dinamico"}) //renderizar el ejs
//})

//usar un html de public
app.use((req,res) => {      //para cuando no encuentra una ruta
  res.status(404).sendFile(__dirname+"/public//html/404.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
