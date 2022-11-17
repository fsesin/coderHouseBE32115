import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
})

export default mongoose.model('usuarios', usuarioSchema)
