import express from 'express'
//import nodemailer from 'nodemailer'
import routes from './routes/routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/',routes)




// app.get('/email', async (req, res) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     port: 587,
//     auth: {
//       user: 'faridsesin@gmail.com',
//       pass: 'zvfpludlzrzhmkmf',
//     },
//   })

//   await transporter.sendMail({
//     from:'PRUEBA CODER<faridsesin@gmail.com>',
//     to:'fsesin@hellobuild.co',
//     subject: 'PROBANDO NODEMAILER CON GMAIL',
//     html:'<h1>BIENVENIDO A NODEMAILER GMAIL</h1>'
//   })
//   res.send('CORREO ENVIADO CON EXITO')
// })

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
