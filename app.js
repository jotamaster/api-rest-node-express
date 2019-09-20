const express = require('express')
const app = express()
require('./knexfile.js')

app.use(express.json())

app.listen(3000, ()=> console.log('Servicio corriendo en el puerto 3000'))


app.get('/',(req,res)=> res.send('api'))