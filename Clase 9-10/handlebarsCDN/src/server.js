const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

// PLANTILA FJS
// app.engine('fjs', function (filePath, options, callback) {
//   fs.readFile(filePath, (error, contenido) => {
//     if (error) throw new Error(error)
//     const contenidoRender = contenido
//       .toString()
//       .replace('!!nombre!!', options.nombre)
//       .replace('!!apellido!!', options.apellido)
//       .replace('!!titulo!!', options.titulo)

//     return callback(null, contenidoRender)
//   })
// })

// app.set('views', './src/views')
// app.set('view engine', 'fjs')

// app.get('/plantilla', (req, res) => {
//   res.render('index', {
//     titulo: 'PLANTILLA PERSONALIZADA',
//     nombre: 'Jonathan',
//     apellido: 'Funes',
//   })
// })

//PLANTILLA CTE - DESAFIO
app.engine('cte', function (filePath, options, callback) {
  fs.readFile(filePath, (error, contenido) => {
    if (error) throw new Error(error)
    const contenidoRender = contenido
      .toString()
      .replace('^^titulo$$', options.titulo)
      .replace('^^mensaje$$', options.mensaje)
      .replace('^^autor$$', options.autor)
      .replace('^^version$$', options.version)

    return callback(null, contenidoRender)
  })
})

app.set('views', './src/views')
app.set('view engine', 'cte')

app.get('/cte1', (req, res) => {
  res.render('plantilla1', {
    titulo: 'PLANTILLA PERSONALIZADA CTE',
    mensaje: 'Bienvenidos a esta plantilla',
    autor: 'Carlos Mejia',
    version: 1.0,
  })
})
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  console.log(`Esuchando al puerto ${PORT}`)
})
