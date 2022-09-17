const socketClient = io()

const formulario = document.getElementById('formulario')
const inputIndfo = document.getElementById('info')

formulario.onsubmit = (e) => {
  e.preventDefault()
  const info = inputIndfo.value
  if (info) {
    socketClient.emit('mensaje', info)
  }
}

socketClient.on('respuesta',respuesta=>{
    console.log(respuesta)
})
