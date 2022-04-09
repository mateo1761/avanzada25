//Importo el framework express
//const express = require('express') //version vieja de importar
import  express  from 'express'

export class Servidor{

    constructor(){
        this.app = express()
        this.atenderPeticiones()
    }

    despertarServidor(){

        this.app.listen(process.env.PORT, function () {
            console.log(`Servidor encendido en el puerto ${process.env.PORT}`)
          })

    }

    atenderPeticiones(){

        //Servicion de mi api
        this.app.get('/api/v1/viernes/:id', function (req, res) {
            res.send('Hola mundo soy GET')// Buscar / Leer
        })

        this.app.post('/api/v1/viernes', function (req, res) {
            res.send('Hola mundo soy post')//Insertar / Escribir
        })
          
        this.app.put('/api/v1/viernes', function (req, res) {
            res.send('Hola mundo soy put')//Modificar / editar
        })
          
        this.app.delete('/api/v1/viernes', function (req, res) {
            res.send('Hola mundo soy delete')//Eliminar
        })
    }

}