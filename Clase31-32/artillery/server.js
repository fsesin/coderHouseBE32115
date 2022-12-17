import express from 'express'

const app = express()

function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false
    }
  }
  return true
}

app.get('/', (req, res) => {
  const primos = []
  const max = parseInt(req.query.max) || 1000
  for (let i = 0; i <= max; i++) {
    if(esPrimo(i)){
        primos.push(i)
    }
  }
  res.json(primos)
})

const PORT = 8082
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
