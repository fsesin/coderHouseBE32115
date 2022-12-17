import log4js from 'log4js'

log4js.configure({
  appenders: {
    myConsole: { type: 'console' },
    myDebugFile: { type: 'file', filename: 'debug.log' },
    myErrorFile: { type: 'file', filename: 'errores.log' },
    logDebug: {
      type: 'logLevelFilter',
      appender: 'myDebugFile',
      level: 'debug',
    },
    logError: {
      type: 'logLevelFilter',
      appender: 'myErrorFile',
      level: 'error',
    },
    logConsole:{
        type:'logLevelFilter',
        appender:'myConsole',
        level:'debug'
    }
  },
  categories: {
    default: { appenders: ['myConsole'], level: 'info' },
    prod: { appenders: ['logDebug', 'logError','logConsole'], level: 'all' },
  },
})

let logger

if(process.argv[2]==='PROD'){
    logger = log4js.getLogger('prod')
} else {
    logger = log4js.getLogger()
}

export default logger