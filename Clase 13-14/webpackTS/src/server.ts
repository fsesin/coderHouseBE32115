import express from 'express'
import Perimetro from './perimetro'
import Area from './area'

const app = express()

// inst area y perimetro
const perimetro: Perimetro = new Perimetro()
const area: Area = new Area()

// creamos rutas
//perimetro
app.get('/perimetro/:figura', (req, res) => {
  const { figura } = req.params
  const { valor1, valor2 } = req.query

  let resultado = 0
  switch (figura) {
    case 'cuadrado':
      resultado = perimetro.cuadrado(Number(valor1))
      break
    case 'rectangulo':
      resultado = perimetro.rectangulo(Number(valor1), Number(valor2))
      break
    case 'circulo':
      resultado = perimetro.circulo(Number(valor1))
      break
    default:
      resultado = 0
  }

  res.json({
    tipo: 'Perimetro',
    figura,
    parametros: [valor1, valor2],
    resultado,
  })
})

app.get('/area/:figura', (req, res) => {
  const { figura } = req.params
  const { valor1, valor2 } = req.query

  let resultado = 0
  switch (figura) {
    case 'cuadrado':
      resultado = area.cuadrado(Number(valor1))
      break
    case 'rectangulo':
      resultado = area.rectangulo(Number(valor1), Number(valor2))
      break
    case 'circulo':
      resultado = area.circulo(Number(valor1))
      break
    default:
      resultado = 0
  }

  res.json({
    tipo: 'Area',
    figura,
    parametros: [valor1, valor2],
    resultado,
  })
})

const PORT: number = 3000

app.listen(PORT, () => {
  console.log(`escuchando al puerto ${PORT}`)
})
