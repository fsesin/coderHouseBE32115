import express from 'express'
import session from 'express-session'
import sessionFileStore from 'session-file-store'

const fileStore = sessionFileStore(session)
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: 'secretDesafio',
    resave: true,
    saveUninitialized: true,
    store: new fileStore({ path: './sessionDesafio', ttl: 60 }),
    cookie: { maxAge: 60000 },
  })
)

app.get('/', (req, res) => {
  const { nombre } = req.query
  if (req.session.contador) {
    req.session.contador++
    res.send(
      `${req.session.nombre} visitaste la pagina ${req.session.contador} veces`
    )
  } else {
    req.session.nombre = nombre || 'invitado'
    req.session.contador = 1
    res.send(`Te damos la bienvenida ${req.session.nombre}`)
  }
})

app.get('/olvidar', (req, res) => {})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
