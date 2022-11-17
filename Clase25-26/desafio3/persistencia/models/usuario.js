import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  facebookId:String
})

export default mongoose.model('usuarios', usuarioSchema)
