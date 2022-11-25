import { exec, fork } from 'child_process'
import express from 'express'
import path from 'path'
// import { stderr, stdout } from 'process'

// exec('ls',(error,stdout,stderr)=>{
//     if(error){
//         console.log(error)
//     }
//     if(stdout){
//         console.log(stdout)
//     }
//     if(stderr){
//         console.log(stderr)
//     }
// })

function sumar() {
  let suma = 0
  for (let i = 0; i < 5e9; i++) {
    suma += i
  }
  return suma
}

const app = express()

let visitas = 0
app.get('/', (req, res) => {
  res.json({ visitas: ++visitas })
})

app.get('/calculo-bloq', (req, res) => {
  const resultado = sumar()
  res.json({ resultado })
})

app.get('/calculo-nobloq', (req, res) => {
  const childProcess = fork('childProcess.js')
  childProcess.send('message')
  childProcess.on('message', (resultado) => {
    res.json({ resultado })
  })
})

const PORT = 8081

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
