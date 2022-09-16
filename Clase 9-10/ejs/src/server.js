const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views','./src/views')
app.set('view engine','ejs')

const usuarios = [
{
    nombre:'Alan',
    apellido:'Mosquella'
},
{
    nombre:'Juan',
    apellido:'Hindle'
},
{
    nombre:'Andres',
    apellido:'Cordoba'
}

]



app.get('/',(req,res)=>{
    res.render('pages/index',{
        usuarios,
        render:true
    })
})

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  console.log(`Esuchando al puerto ${PORT}`)
})