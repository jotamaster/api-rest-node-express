require('dotenv').config()

const express = require ('express')
const passport = require('passport')

const environment = process.env.NODE_ENV || 'development'


const indexRouter = require('./routes/index');
const userRouter = require('./routes/user/index')
const authRouter = require('./routes/auth');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Autorization')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', '*')
  
    return next()
});

app.use(passport.initialize())

app.use('/', indexRouter)
app.use('/user',userRouter)
app.use('/auth', authRouter);


  // error 404
  app.use((req, res) => {
    res
      .status(404)
      .send({
        error: 'Not found',
        path: req.url
      });
  });
  
  app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`)
  
    if (environment === 'development') {
      console.log(`Swagger UI: http://localhost:${process.env.PORT || '3000'}/api-docs`)
    }
  });
  