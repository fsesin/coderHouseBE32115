const express = require('express')
const http = require('http')
const {Server: SocketServer} = require('socket.io')

const app = express()
const httpServer = http.createServer(app)
const socketServer = new SocketServer(httpServer)

app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

//WEBSOCKET
socketServer.on('connection',client=>{
    console.log('usuario conectado')
    console.log(client.id)
    client.on('disconnect',()=>{
        console.log(`Cliente desconectado`)
    })
    client.on('mensaje',msj=>{
        console.log('----mensaje-----',msj)
        client.emit('respuesta','gracias por ingresar informacion')
    })
})






//
const PORT = process.env.PORT || 3000
httpServer.listen(PORT,()=>{
    console.log(`Servidor escuchando al puerto ${PORT}`)
})