import winston from 'winston'

const loggerDev = winston.createLogger({
    transports:[
        new winston.transports.Console({level:'info'})
    ]
})

const loggerProd = winston.createLogger({
    transports:[
        new winston.transports.File({filename:'debug.log',level:'debug'}),
        new winston.transports.File({filename:'errores.log',level:'error'})
    ]
})



let logger 

if(process.argv[2]==='PROD'){
    logger = loggerProd
} else {
    logger = loggerDev
}

export default logger