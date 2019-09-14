const express = require('express')
const app = express()

app.get('/',(req,res)=> res.send('ruta inicial'))

app.listen(3000, ()=> console.log('Servicio corriendo en el puerto 3000'))