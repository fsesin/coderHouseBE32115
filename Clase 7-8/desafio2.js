const express = require('express')
const { ppid } = require('process')
const app = express()

app.get('/api/sumar/:num1/:num2',(req,res)=>{
    const {num1,num2} = req.params
    const respuesta = Number(num1) + Number(num2)
    res.send(respuesta.toString())
})
app.get('/api/sumar',(req,res)=>{
    const {num1,num2} = req.query
    const respuesta = Number(num1) + Number(num2)
    res.send(respuesta.toString())
})

app.post('/api',(req,res)=>{
    res.send(`Ok post`)
})
app.put('/api',(req,res)=>{
    res.send(`Ok put`)
})
app.delete('/api',(req,res)=>{
    res.send(`Ok delete`)
})




const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})