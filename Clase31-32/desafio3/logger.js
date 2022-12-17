import pino from 'pino'


const loggerProd = pino('debug.log')
loggerProd.level = 'debug'

const loggerDev = pino()
loggerDev.level = 'info'

let logger 

if(process.argv[2]==='PROD'){
    logger = loggerProd
} else {
    logger = loggerDev
}

export default logger