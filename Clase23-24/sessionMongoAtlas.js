import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret:'mongoKey',
    resave:true,
    saveUninitialized:true,
    store: MongoStore.create({mongoUrl:'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/?retryWrites=true&w=majority'}),
    cookie:{maxAge:30000}
}))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('session')
})

app.post('/session',(req,res)=>{
    for (const key in req.body) {
        req.session[key] = req.body[key]
    }
    res.send('Bienvenido')
})


const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})