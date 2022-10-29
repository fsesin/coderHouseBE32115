import express from 'express'
import { connect } from './persistencia/dbConfig.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3000

try {
  await connect()
  console.log('Conectado a la base de datos')
  app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`)
  })
} catch (error) {
  console.log(error)
}




