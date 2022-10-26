const mongoose = require('mongoose')

const estudiantesSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  curso: {
    type: String,
    required: true,
  },
  nota: {
    type: Number,
    required: true,
  },
  ingreso:{
    type:Boolean,
    default: false
  }
})

const estudiantesModel = mongoose.model('Estudiantes',estudiantesSchema)
module.exports = estudiantesModel
