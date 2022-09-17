const socketClient = io()

const formulario = document.getElementById('formulario')
const inputNombre = document.getElementById('name')
const inputInfo = document.getElementById('info')
const lista = document.getElementById('lista')

formulario.onsubmit = (e) =>{
    e.preventDefault()
    const info = inputInfo.value
    const nombre = inputNombre.value
    const obj = {nombre,info}
    socketClient.emit('mensaje',obj)
    inputInfo.value = ''
}


socketClient.on('mensajesArray',mensajesArray=>{
    console.log(mensajesArray)
    generarTexto(mensajesArray)
})

socketClient.on('mensajeBienvenida',msn=>{
    generarTexto(msn)
})

function generarTexto(mensajes){
    const inner = mensajes.map(mensaje=>{
        return (`<li>${mensaje.nombre}: ${mensaje.info}</li><br>`)
    }).join(' ')
    lista.innerHTML = inner
}