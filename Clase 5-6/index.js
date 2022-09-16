//console.log('Mi primer console con Node')

// const http = require('http')

// const app = http.createServer((req,res)=>{
//     res.end('Servidor creado')
// })

// const PORT = 8082

// app.listen(PORT,()=>{
//     console.log(`Escuchando al puerto ${PORT}`)
// })

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Bienvenido a nuestro BACKEND')
})

app.get('/api',(req,res)=>{
    res.send('Ingresaste a /api')
})

const PORT = 8082
app.listen(PORT, (req, res) => {
  console.log(`Escuchando al puerto ${PORT}`)
})
