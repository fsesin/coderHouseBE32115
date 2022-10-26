import express from 'express'
import { sequelize } from './db/dbConfig.js'
import productsRoutes from './routes/productsRoutes.js'
import './db/models/ProductModel.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/products', productsRoutes)

const PORT = 3000

try {
  await sequelize.sync()
  console.log('Conectado a la base de datos')
  app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`)
  })
} catch (error) {
  console.log('No es posible conectarse a la base de datos: ', error)
}
