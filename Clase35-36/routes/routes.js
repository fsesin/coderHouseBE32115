import { Router } from 'express'
import { transporter } from '../utils/nodemailer.js'
import { client } from '../utils/twilio.js'
const router = Router()
router.get('/', (req, res) => {
  res.render('index')
})
router.post('/email', async (req, res) => {
  const { nombre, apellido, email } = req.body
  const contentHTML = `
    <h1>INFORMACION DE USUARIO</h1>
    <p>Hola ${nombre} ${apellido}.
    Tu correo es ${email}</p>
    <h4>GRACIAS POR VISITARNOS</h4>
    `
  

  const infoEmail = await transporter.sendMail({
    from: 'CODERBACKEND',
    to: email,
    subject: 'LOGIN EXITOSO',
    html: contentHTML,
    attachments:[
        {
            filename:'cripto-expert.jpg'
        }
    ]
  })
console.log('informacion correo',infoEmail)
  res.send('GRACIAS POR CREAR TU CUENTA CON NOSOTROS')
})
router.get('/twilio',async(req,res)=>{
    await client.messages.create({
      body:'Prueba TWILIO',
      from:'+13365942177',
      to:'+573016578152'
    })

res.send('SMS ENVIADO CON EXITO')
})
export default router
