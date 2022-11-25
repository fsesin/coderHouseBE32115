process.on('exit', (code) => {
  if (code) {
    console.log(`proceso terminado con codigo ${code}`)
  } else {
    console.log('proceso terminado')
  }
})

process.on('uncaughtException', (error) => {
  if (error.description === 'error de tipo') {
    return process.exit(-5)
  } else if (error.description === 'entrada vacia') {
    return process.exit(-4)
  } else {
    return process.exit()
  }
})

function valorPromedio(numeros){
  if (numeros.length === 0) {
    throw {
      description: 'entrada vacia',
    }
  }
  let total = 0
  for (const num of numeros) {
    const valorNum = Number(num)
    if (isNaN(valorNum)) {
      throw {
        description: 'error de tipo',
        numeros,
        tipos: numeros.map((num) => (isNaN(num) ? typeof num : 'number')),
      }
    } else {
      total += valorNum
    }
  }
  return total / numeros.length
}

const numeros = process.argv.slice(2)
const promedio = valorPromedio(numeros)
const max = Math.max(...numeros)
const min = Math.min(...numeros)
const ejecutable = process.execPath
const pid = process.pid
//console.log(process)

const datos = {
  numeros,
  promedio,
  max,
  min,
  ejecutable,
  pid,
}
console.log(datos)

