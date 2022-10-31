import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// arrays
const nombres = ['Luis', 'Lucia', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

//ruta
app.get('/test', (req, res) => {
  const arrayResponse = []

  for (let i = 1; i <= 10; i++) {
    const numNom = Math.round(Math.random() * 4)
    const numApel = Math.round(Math.random() * 4)
    const numColor = Math.round(Math.random() * 4)
    const obj = {
      nombre: nombres[numNom],
      apellido: apellidos[numApel],
      color: colores[numColor],
    }
    arrayResponse.push(obj)
  }

  res.json({ response: arrayResponse })
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
