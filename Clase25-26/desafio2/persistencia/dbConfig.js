import mongoose from 'mongoose'

mongoose
  .connect(
    'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/passportMongo?retryWrites=true&w=majority'
  )
  .then((db) => console.log('Base de datos conectada'))
  .catch((err) => console.llog(err))
