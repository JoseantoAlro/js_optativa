const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname+'/public'));    //acceso a carpeta public pero con la ruta absoluta

app.get('/', (req, res) => {
  console.log(__dirname)  //pinjtar ruta en consola
  res.send('Hello World!')
})
app.get('/contacto', (req, res) => {
  res.send('contacto.html')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
