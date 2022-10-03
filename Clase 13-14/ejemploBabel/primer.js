//const express = require('express')
import express from 'express'

const app = express()

const numAlCuadrado = (array)=>{
    array.forEach(num => num**2);
}

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})

