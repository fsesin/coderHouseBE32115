const http = require('http')

function mensaje(){
    const hora = new Date().getHours()
    if(hora>=6 && hora<=12){
        return 'Buenos dias Juan'
    } else if(hora>=13 && hora <=19){
        return 'Buenas tardes'
    } else {
        return 'Buenas noches'
    }
}


const app = http.createServer((req,res)=>{
    res.end(mensaje())
})

const PORT = 8082
app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})