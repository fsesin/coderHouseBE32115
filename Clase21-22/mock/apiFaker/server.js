import express from 'express'
import productsRoutes from './routes/productsRoutes.js'
import { dbConnect } from './persistencia/dbConfig.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/products', productsRoutes)

const PORT = 8080

try {
  await dbConnect()
  console.log('Conectado a la base de datos')
  app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`)
  })
} catch (error) {
  console.log(error)
}
