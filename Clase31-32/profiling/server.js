import express from 'express'

const app = express()

function numerosRandom(){
    const array = []
    for(let i=0;i<10000;i++){
        array.push(Math.floor(Math.random()*10))
    }
    return array
}



app.get('/randoms-nodebug',(req,res)=>{
const resultado = numerosRandom()
res.json({random:resultado})

})

app.get('/randoms-debug',(req,res)=>{
const resultado = numerosRandom()
console.log(resultado)
res.json({random:resultado})
    
})

const PORT = 8082
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})