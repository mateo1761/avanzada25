const express = require('express')
const app = express()

require('dotenv').config()  
console.log(process.env.PORT)

app.get('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy GET')// Buscar / Leer
})

app.post('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy post')//Insertar / Escribir
})

app.put('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy put')//Modificar / editar
})

app.delete('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy delete')//Eliminar
})

app.listen(process.env.PORT, function () {
  console.log(`Servidor encendido en el puerto ${process.env.PORT}`)
})

//variables de entorno : son variables asociadas del servidor que no dependen del programador
