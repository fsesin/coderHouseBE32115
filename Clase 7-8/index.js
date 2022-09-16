//metodos

//get => mostrar informacion
//post => agregar alguna informacion
//put => modificar alguna informacion
//delete => eliminar informacion

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
res.send('bienvenido')
})

app.get('/login',(req,res)=>{
    console.log('------request------',req)
    res.send('Estas intentando logearte')
})
app.get('/users/:id',(req,res)=>{
    const {id} = req.params
    console.log(id)
    res.send('Prueba params')
})
app.get('/users',(req,res)=>{
    const {cont,pais} = req.query
    console.log(cont,pais)
    //res.send('Prueba query')
    if(cont || pais){
        res.send('Querys enviados')
    } else {
        res.send('No se encontraron ningun query')
    }
})

// params - query - body




// app.get('/orgs/{org}/repos',()=>{
    
// })

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})