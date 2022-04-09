//Importo las variables de entorno
//require('dotenv').config()  forma vieja de importar 
import 'dotenv/config'
console.log(process.env.PORT)

//IMPORTO LA CLASE Servidor
import {Servidor} from './Server/Servidor.js'

//Crear obejto de la clase servidor

let servidor = new Servidor()

//DESPERTAR EL SERVIDOR

servidor.despertarServidor()

//Todo endpoint empieza con un /

/*
app.post('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy post')//Insertar / Escribir
})

app.put('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy put')//Modificar / editar
})

app.delete('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy delete')//Eliminar
})*/

//variables de entorno : son variables asociadas del servidor que no dependen del programador
