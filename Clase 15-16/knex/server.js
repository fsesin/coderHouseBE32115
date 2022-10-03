import express from 'express'
import productsRouter from './routes/productsRoutes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// rutas
app.use('/products',productsRouter)



const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})