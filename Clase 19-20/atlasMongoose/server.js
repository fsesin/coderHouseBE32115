import express from 'express'
import { bdConnect } from './db/dbConfig.js'
import productsRoutes from './routes/productsRoutes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/products',productsRoutes)


const PORT = 3000

try {
  await bdConnect()
  console.log('Conectado a la base de datos')
  app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`)
  })
} catch (error) {
  console.log(error)
}
