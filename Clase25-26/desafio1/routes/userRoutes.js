import { Router } from 'express'

const router = Router()
const usuarios = []

router.get('/', (req, res) => {
  res.render('login')
})
router.get('/registro', (req, res) => {
  res.render('registro')
})

router.post('/registro', (req, res) => {
  if (usuarios.some((usuario) => usuario.username === req.body.username)) {
    return res.render('errorRegistro')
  } else {
    usuarios.push(req.body)
    res.render('login')
  }
})

router.post('/login', (req, res) => {
  const { username, password } = req.body
  const usuario = usuarios.find((usuario) => usuario.username === username)
  if (usuario && usuario.password === password) {
    for (const key in req.body) {
      req.session[key] = req.body[key]
    }
    res.redirect('/datos')
  } else {
    res.render('errorLogin')
  }
})

router.get('/datos', (req, res) => {
  if (req.session.username) {
    res.render('datos', { username: req.session.username })
  } else {
    res.redirect('/')
  }
})

router.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
    
})
export default router
