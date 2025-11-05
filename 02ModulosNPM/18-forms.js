var http = require('http').createServer(webServer),
    form = require('fs').readFileSync('form.html'),
    querystring = require('querystring'),
    util = require('util'),
    dataString = ''; //aqui se concatena el resultado

function webServer(req, res)
{
    if(req.method == 'GET')         //si la peticion es un get devuelve el form
    {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(form)
    }
    if(req.method == 'POST')
    {
        req
            .on('data', function (data){ //Mientras haya datos, ejecutaremos la siguiente Callback
                dataString += data //Que concatenará el dato en la variable dataString
            })
            .on('end', function (){ 
                var dataObject = querystring.parse(dataString),
                dataJson = util.inspect(dataObject),
                templateString = `
                Los datos que enviaste por POST como string son : ${dataString}
                Los datos que enviaste por POST como Json son: ${dataJson}
                `
                console.log(templateString)
                res.end(templateString)
            })
    }


}

http.listen(3000)

console.log('servidor corriendo en http://localhost:3000')