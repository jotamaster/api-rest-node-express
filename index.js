const express = require('express')
require('./routes/users')
const User = require('./models/Users')

const app = express()
app.use(express.json());

let users =  ''


app.listen(3000, ()=> console.log('Servicio corriendo en el puerto 3000'))

app.get('/users',(req,res)=> res.send(users))

app.post('/', function (req, res) {
  res.send('POST request to homepage')
  
})
