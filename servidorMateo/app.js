const express = require('express')
const app = express()

app.get('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy get')
})

app.post('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy post')
})

app.put('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy put')
})

app.delete('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy delete')
})

app.listen(3000)