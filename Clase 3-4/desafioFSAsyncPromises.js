const fs = require('fs')

fs.promises.readFile('./info.txt','utf-8')
.then(contenido=>{
const info = JSON.parse(contenido)
console.log(info)
const contObj = info.contenidoObj
contObj.author = 'Coderhouse'
return fs.promises.writeFile('./package.json.coder',JSON.stringify(contObj))
})
.then(() => console.log('Archivo creado con exito'))
.catch(error=>console.log(error))