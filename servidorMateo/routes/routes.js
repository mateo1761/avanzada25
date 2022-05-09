//Importo el framework express
//version vieja de importar
import  express  from 'express'

//Una variable para almacenar la funcionalidad de express Router
//Que es la que me permite personalizar y separar rutas
export let rutas = express.Router();

//Defino mis rutas
rutas.get('/api/v1/viernes', function (req, res) {
    res.send('Hola mundo')
})