import express from 'express'
import { argv } from 'process'

const app = express()

    app.get('/',(req,res)=>{
        console.log(`El proceso es: ${process.pid} `)
        res.send(`El proceso es: ${process.pid}`)
    })

    const PORT = process.argv[2] || 8081
    app.listen(PORT,()=>{
        console.log(`Escuchando al puerto ${PORT} - proceso ${process.pid}`)
    })