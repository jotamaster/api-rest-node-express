const express = require('express')
const User = require('./models/Users')

const app = express()

let test = User.findAll({
    attributes: ['name' ]
  });
app.get('/',(req,res)=> res.send(test))

app.listen(3000, ()=> console.log('Servicio corriendo en el puerto 3000'))