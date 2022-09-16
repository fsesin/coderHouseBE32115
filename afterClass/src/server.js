const express = require('express')
const generalRoutes = require('./routes/index.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',generalRoutes)





const PORT = process.env.PORT || 8081
app
  .listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`)
  })
  .on('error', (error) => console.log(error))
