import passport from 'passport'
import { Strategy as LocalStategy } from 'passport-local'
import Usuarios from '../persistencia/models/usuario.js'

passport.use(
  'registro',
  new LocalStategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const usuarioDB = await Usuarios.find({ username })
      if (usuarioDB.length > 0) {
        return done(null, false)
      } else {
        const usuario = new Usuarios()
        usuario.username = username
        usuario.password = password
        usuario.save()
        done(null, usuario)
      }
    }
  )
)

passport.use(
  'login',
  new LocalStategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const usuarioDB = await Usuarios.find({ username, password })
      if (usuarioDB.length === 0) {
        return done(null, false)
      }
      done(null, usuarioDB)
    }
  )
)

passport.serializeUser((usuario,done)=>{
    done(null,usuario.id)
})

passport.deserializeUser(async(id,done)=>{
    const usuarioDB = await Usuarios.findById(id)
    done(null,usuarioDB)
})
