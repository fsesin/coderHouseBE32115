import express from 'express'
import compression from 'compression'

const app = express()

//app.use(compression())


const respuesta = 'Hola que tal '.repeat(1000)

app.get('/saludo', (req, res) => {
  res.send(respuesta)
})

app.get('/saludozip',compression(), (req, res) => {
  res.send(respuesta)
})

const PORT = 8081

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
