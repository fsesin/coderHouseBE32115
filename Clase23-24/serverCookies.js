import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser('secretKey'))  // middleware

const info = {
    nombre: 'Agustin',
    apellido: 'Mosquella',
    edad: 45
}

app.get('/cookiesSession',(req,res)=>{
res.cookie('nombre',info.nombre).send('Cookie session guardada con exito')
})

app.get('/cookiesTimer',(req,res)=>{
    res.cookie('apellido',info.apellido,{maxAge:15000}).send('Cookie timer guardada con exito')
    })

app.get('/cookies',(req,res)=>{
    console.log('cookies firmadas',req.signedCookies)
    console.log('cookies no firmadas',req.cookies)
    res.send('mirar consola')
})

app.get('/signedCookies',(req,res)=>{
    res.cookie('edad',info.edad,{signed:true}).send('cookie firmada guardada con exito')
})

app.get('/deleteCookies',(req,res)=>{
    res.clearCookie('nombre').send('Cookie borrada con exito')
})


const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})