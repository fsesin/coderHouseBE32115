import passport from 'passport'
import { Strategy as FacebookStategy } from 'passport-facebook'
import Usuarios from '../persistencia/models/usuario.js'

passport.use(
  new FacebookStategy(
    {
      clientID: '657848485721668',
      clientSecret: '42ca056e4b17f53d7d336bab71bd6051',
      callbackURL: 'http://localhost:8080/auth/facebook',
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      const usuarioDB = await Usuarios.findOne({ facebookId: profile.id })
      if (usuarioDB) {
        return done(null, usuarioDB)
      }
      const usuario = new Usuarios()
      usuario.username = profile.displayName
      usuario.facebookId = profile.id
      usuario.save()
      done(null, usuario)
    }
  )
)

passport.serializeUser((usuario, done) => {
  done(null, usuario.id)
})

passport.deserializeUser(async (id, done) => {
  const usuarioDB = await Usuarios.findById(id)
  done(null, usuarioDB)
})
