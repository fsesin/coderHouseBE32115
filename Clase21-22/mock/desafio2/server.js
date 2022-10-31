import express from 'express'
import { faker } from '@faker-js/faker/locale/es_MX'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//ruta
app.get('/test', (req, res) => {
  const { cant } = req.query
  const max = cant || 10
  const arrayResponse = []
  for (let i = 1; i <= max; i++) {
    const obj = {
      id: i,
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      color: faker.color.human(),
    }
    arrayResponse.push(obj)
  }

  res.json({ response: arrayResponse })
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
