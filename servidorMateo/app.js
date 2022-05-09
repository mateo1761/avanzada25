//Importo las variables de entorno
//require('dotenv').config()  forma vieja de importar  
import 'dotenv/config'

//1. IMPORTO LA CLASE SERVIDOR
import {Servidor} from './Server/Servidor.js'

//2. Crear obejto de la clase servidor
let servidor = new Servidor()

//3. DESPERTAR EL SERVIDOR
servidor.despertarServidor()

//Todo endpoint empieza con un /

//variables de entorno : son variables asociadas del servidor que no dependen del programador
