import express from 'express'
import { config } from './config.js'
const app = express()

const PORT = config.PORT
const obj = JSON.stringify({ modo: config.MODO, puerto: config.PORT, debug: config.DEBUG })
app.listen(PORT, () => {
  console.log(`${obj}`)
})
