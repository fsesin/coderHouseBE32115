const fs = require('fs')

fs.readFile('package.json', 'utf-8', (error, contenido) => {
  if (error) {
    throw new Error(error)
  } 
  const info = {
    contenidoStr: contenido,
    contenidoObj: JSON.parse(contenido),
    size: contenido.length,
  }
  console.log(info)

  fs.writeFile('./info.txt', JSON.stringify(info), (error) => {
    if (error) {
      throw new Error(error)
    } 
      console.log('Archivo creado con exito')
  })
})
