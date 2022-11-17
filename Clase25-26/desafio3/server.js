import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import userRoutes from './routes/userRoutes.js'
import './persistencia/dbConfig.js'

// llamado de passport 

import passport from 'passport'
import './passport/facebookPassport.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: 'keySession',
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/passportMongoFacebook?retryWrites=true&w=majority',
    }),
  })
)
// inicializar passport
app.use(passport.initialize())
// passport trabajando con la informacion de session
app.use(passport.session())


app.use('/', userRoutes)

// motor de plantilla
app.set('views', './views')
app.set('view engine', 'ejs')





const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
