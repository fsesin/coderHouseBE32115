const fs = require('fs')

fs.writeFile('./fileAsync.txt', 'Este es una prueba asincrona', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('archivo creado con exito')
  }
})
fs.readFile('./fileAsync.txt', 'utf-8', (error, contenido) => {
  if (error) {
    console.log(error)
  } else {
    console.log(contenido)
  }
})
fs.unlink('./fileAsync.txt', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Archivo borrado')
  }
})
