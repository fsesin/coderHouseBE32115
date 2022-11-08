import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('desafioKey')) // middleware

app.get('/cookies', (req, res) => {
  res.json({ signed: req.signedCookies, notSigned: req.cookies })
})

app.post('/cookies', (req, res) => {
  const { nombre, valor, tiempo } = req.body
  if (!nombre) return res.send({ error: 'falta nombre' })
  if (!valor) return res.send({ error: 'falta valor' })

  tiempo
    ? res
        .cookie(nombre, valor, { maxAge: tiempo * 1000 })
        .send({ proceso: 'ok' })
    : res.cookie(nombre, valor).send({ proceso: 'ok' })
})

app.delete('/cookies/:nombre', (req, res) => {
  const { nombre } = req.params
  nombre
    ? res.clearCookie(nombre).send({ mensaje: 'cookie eliminada con exito' })
    : res.send({ error: 'falta nombre' })
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
