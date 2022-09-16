const fs = require('fs')

// fs.writeFileSync('./pruebaFS.txt','Primera informacion a guardar')
// const informacion = fs.readFileSync('./pruebaFS.txt','utf-8')
// console.log(informacion)
// fs.unlinkSync('./pruebaFS.txt')


try {
    fs.writeFileSync('./fyh.txt', new Date().toLocaleString())
} catch (error) {
    throw new Error(error)
}

try {
    const informacion = fs.readFileSync('fyh.txt','utf-8')
    console.log(informacion)
} catch (error) {
    throw new Error(error)
}