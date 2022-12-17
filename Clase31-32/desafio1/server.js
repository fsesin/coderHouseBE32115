import express from 'express'
import logger from './logger.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/sumar', (req, res) => {
  const { num1, num2 } = req.query
  if (isNaN(num1) || isNaN(num2)) {
    logger.error('Ingresaste un valor incorrecto')
    res.send('Ingresaste un valor incorrecto')
  } else {
    const resultado = parseInt(num1) + parseInt(num2)
    logger.info('Operacion exitosa')
    res.send(`La suma de los dos numeros es ${resultado}`)
  }
})

app.get('*', (req, res) => {
  logger.warn('Recurso invalido')
  res.send('Recurso invalido')
})

const PORT = 8082

const server = app.listen(PORT, () => {
  logger.info(`Escuchando al puerto ${PORT}`)
})
server.on('error', (error) => logger.error(error))
