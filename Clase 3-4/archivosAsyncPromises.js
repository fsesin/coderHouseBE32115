const fs = require('fs')

fs.promises
  .readFile('package.json', 'utf-8')
  .then((contenido) => {
    const info = {
      contenidoStr: contenido,
      contenidoObj: JSON.parse(contenido),
      size: contenido.length,
    }

    return fs.promises.writeFile('./info.txt', JSON.stringify(info))
  })
  .then(() => console.log('Archivo creado con exito'))
  .catch((error) => {
    console.log(error)
  })
