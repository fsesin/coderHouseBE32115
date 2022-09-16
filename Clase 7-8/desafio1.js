
const express = require('express')
const app = express()
const palabrasRoutes = require('./routes/palabras.js')
const fraseRoutes = require('./routes/frase.js')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/palabras',palabrasRoutes)
app.use('/api/frase',fraseRoutes)


app.get('/api/letras/:num', (req, res) => {
  const { num } = req.params
  try {
    let letra = frase[num - 1]
    res.send(letra)
  } catch (error) {
    res.send(error)
  }
})



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})


//CRUD => create - read - update - delete 

