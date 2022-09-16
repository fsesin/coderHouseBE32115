const express = require('express')
const app = express()
const personasRoutes = require('./routes/personas.js')
const mascotasRoutes = require('./routes/mascotas.js')
const morgan = require('morgan')
const multer = require('multer')







app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(multer({
    dest:__dirname+'/public/files'
}).array('fileMulter',10))

app.use('/mascotas',mascotasRoutes)
app.use('/personas',personasRoutes)
app.use(express.static(__dirname+'/public'))


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})