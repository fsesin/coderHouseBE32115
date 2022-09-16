const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views','./src/views')
app.set('view engine', 'pug')

app.get('/',(req,res)=>{
    res.render('index',{mensaje:'Bienvenido ',nombre:'Juan', apellido:'Eandi',deporte:'ciclismo'})
})

app.get('/datos',(req,res)=>{
    const {value,min,max,title} = req.query
    res.render('medidor',({value,min,max,title}))
})


const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  console.log(`Esuchando al puerto ${PORT}`)
})