const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('pruebas', __dirname+'/prueba');
app.use(express.static(__dirname+'/public'));    //acceso a carpeta public pero con la ruta absoluta

app.get('/pruebas', (req, res) => {  //send envia reuqest info y render desde nuestro servidor o algo asi
  res.render("prueba", {titulo : "mi titulo dinamico"});
})

//app.get('/', (req, res) => {
  //console.log(__dirname)  //pintar ruta en consola
  //res.render("index", {titulo : "mi titulo dinamico"}) //renderizar el ejs
//})
app.get('/contacto', (req, res) => {
  res.send('contacto.html')
})
app.use((req,res) => {      //para cuando no encuentra una ruta
  res.status(404).sendFile(__dirname+"/public//html/404.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
