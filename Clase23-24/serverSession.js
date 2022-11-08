import express from 'express'
import session from 'express-session'
import sessionFileStore from 'session-file-store'

const fileStore = sessionFileStore(session)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: 'keySession',
    resave: true,
    saveUninitialized: true,
    store: new fileStore({path:'./sessionFolder', ttl:30})
  })
)

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('session')
})

app.post('/session',(req,res)=>{
    for (const key in req.body) {
        req.session[key] = req.body[key]
    }
    res.send({'Datos guardados con exito':req.session})
})




const PORT = 8080

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
