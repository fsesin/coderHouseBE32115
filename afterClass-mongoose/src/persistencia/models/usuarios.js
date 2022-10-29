import mongoose from 'mongoose'

const usuariosSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  age: {
    type: Number,
    required: true,
  },
})

export const usuariosModel = mongoose.model('Usuarios', usuariosSchema)
