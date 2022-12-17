import express from 'express'
import cluster from 'cluster' // modulo nativo de node
import os from 'os'
const numProcesadores = os.cpus().length
//console.log(numProcesadores)

if(cluster.isPrimary){
console.log(`Proceso maestro ${process.pid}`)
for(let i=0;i<16;i++){
    cluster.fork()
}

cluster.on('exit',()=>{
    cluster.fork()
})



}else{
    const app = express()

    app.get('/',(req,res)=>{
        res.send(`El proceso es: ${process.pid}`)
    })



    const PORT = 8081
    app.listen(PORT,()=>{
        console.log(`Escuchando al puerto ${PORT} - proceso ${process.pid}`)
    })

}


