const express = require('express')
const http = require('http')
const { Server: SocketServer } = require('socket.io')

const app = express()
const httpServer = http.createServer(app)
const socketServer = new SocketServer(httpServer)

app.use(express.static('./public'))
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

//WEBSOCKET
const mensajes = []
socketServer.on('connection', (client) => {
  console.log('!Nuevo cliente conectado!')

  client.emit('mensajeBienvenida', mensajes)

  client.on('mensaje', (obj) => {
    mensajes.push(obj)
    socketServer.sockets.emit('mensajesArray', mensajes)
  })
})

const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () => {
  console.log(`Servidor escuchando al puerto ${PORT}`)
})
