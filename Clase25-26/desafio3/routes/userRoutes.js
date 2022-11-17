import e, { Router } from 'express'
import passport from 'passport'

const router = Router()
const usuarios = []

// middleware
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.render('login')
  }
}

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/')
  })
})

// passport
router.get('/', isAuth, (req, res) => {
  res.redirect('/datos')
})

router.get('/registro', (req, res) => {
  res.render('registro')
})

router.post(
  '/registro',
  passport.authenticate('registro', {
    failureRedirect: '/errorRegistro',
    successRedirect: '/datos',
  })
)

router.post(
  '/login',
  passport.authenticate('login', {
    failureRedirect: '/errorLogin',
    successRedirect: '/datos',
  })
)

router.get('/errorRegistro', (req, res) => {
  res.render('errorRegistro')
})

router.get('/errorLogin', (req, res) => {
  res.render('errorLogin')
})

router.get('/datos', isAuth, (req, res) => {
  res.render('datos', { username: req.user.username })
})

// passport-facebook routes
router.get('/auth', passport.authenticate('facebook'))

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    failureRedirect: '/errorLogin',
    successRedirect: '/datos',
  })
)
export default router
