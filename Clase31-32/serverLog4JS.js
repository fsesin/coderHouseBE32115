import express from 'express'
import log4js from 'log4js'

const app = express()

log4js.configure({
  appenders: {
    myConsole: { type: 'console' },
    myFile: { type: 'file', filename: 'infoFile.log' },
    myFileError: {type:'file',filename:'errorFile.log'}
  },
  categories: {
    default: { appenders: ['myConsole'], level: 'trace' },
    consola: { appenders: ['myConsole'], level: 'error' },
    archivo: { appenders: ['myFile'], level: 'info' },
    error: { appenders: ['myFileError'], level: 'warn' },
  },
})

const logPrueba = log4js.getLogger('archivo')
const logPrueba2 = log4js.getLogger('error')

const PORT = 8081

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
  logPrueba.info('probando logs info')
  logPrueba.error('hay un error en el servidor'+PORT)
  logPrueba.debug('probando logs debug')
  logPrueba2.error('probando errores')
  logPrueba2.fatal('esta danado')
  logPrueba2.warn('cuidado!!!!!')
})
