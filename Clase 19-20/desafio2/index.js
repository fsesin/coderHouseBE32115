const mongoose = require('mongoose')
const estudiantesModel = require('./models/estudiantes.js')

mongoose
  .connect('mongodb://127.0.0.1:27017/colegio')
  .then(() => {
    console.log('Base de datos conectada')
    return estudiantesModel.find({}).sort({ nombre: 1 })
  })
  .then((result) => {
    //console.log(result)
    return estudiantesModel.find({}).sort({ edad: 1 }).limit(1)
  })
  .then((result) => {
    //console.log(result)
    return estudiantesModel.find({ curso: '2A' })
  })
  .then((result) => {
    //console.log(result)
    return estudiantesModel.find({}).sort({ edad: 1 }).limit(1).skip(1)
  })
  .then((result) => {
    //console.log(result)
    return estudiantesModel
      .find({}, { nombre: 1, apellido: 1, curso: 1, _id: 0 })
      .sort({ apellido: -1 })
  })
  .then((result) => {
    //console.log(result)
    return estudiantesModel.find({ nota: 10 })
  })
  .then((result) => {
    //console.log(result)
    return estudiantesModel.find({}, { nota: 1, _id: 0 })
  })
  .then((result) => {
    //console.log(result)
    let totalNotas = 0
    result.forEach((estudiante) => {
      totalNotas = totalNotas + estudiante.nota
    })
    const promedioNotas = totalNotas / result.length
    //console.log(promedioNotas)
    return estudiantesModel.find({ curso: '1A' }, { nota: 1, _id: 0 })
  })
  .then((result) => {
    let totalNotas = 0
    result.forEach((estudiante) => {
      totalNotas = totalNotas + estudiante.nota
    })
    const promedioNotas = totalNotas / result.length
    console.log(promedioNotas)
  })
  .catch((err) => console.log(err))
