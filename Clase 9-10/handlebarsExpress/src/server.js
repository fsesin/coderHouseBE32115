const express = require('express')
const app = express()
const hbs = require('express-handlebars')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(express.static(__dirname + '/public'))

app.engine('hbs',hbs.engine({
partialsDir: __dirname+'/views/partials',
layoutsDir: __dirname+'/views/layouts',
extname:'.hbs',
defaultLayout:'layout1.hbs'
}))

app.set('views','./src/views')
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index',{layout:'layout2.hbs'})
})

app.get('/main',(req,res)=>{
    const {nombre,apellido,deporte} = req.query
    res.render('main',{nombre,apellido,deporte,render:true})
})

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  console.log(`Esuchando al puerto ${PORT}`)
})