import express from 'express'
import session from 'express-session'
import sessionFileStore from 'session-file-store'
import userRoutes from './routes/userRoutes.js'
const app = express()
const fileStore = sessionFileStore(session)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: 'keySession',
    store: new fileStore({ path: './sessions', ttl: 30 }),
  })
)
app.use('/', userRoutes)

// motor de plantilla
app.set('views', './views')
app.set('view engine', 'ejs')

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
