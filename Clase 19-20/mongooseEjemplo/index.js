import mongoose from 'mongoose'
import { productsModel } from './models/products.js'

async function bdMongoose() {
  mongoose.connect('mongodb://127.0.0.1:27017/ejemploMongoose')

  mongoose.connection.on('open', () => {
    console.log('Base de datos conectada')
  })

  mongoose.connection.on('error', (err) => {
    console.log(err)
  })

  // READ

  // const products = await productsModel.find({})
  // console.log(products)

  // CREATE

  // const product1 = {name:'Computador',price:800,stock:25}
  // const productSchema = new productsModel(product1)
  // const productCreated = await productSchema.save()
  // console.log(productCreated)

  // LEER CON PROPIEDADES
 // const products = await productsModel.findOne({name:'Computador'})
//   const products = await productsModel
//     .find({}, { name: 1, price: 1, _id: 0 })
//     .sort({ name: 1 })
//     .limit(2)
//     .skip(1)

 //  console.log(products)

// UPDATE
// const updatedProduct = await productsModel.updateOne({name:'Computador'},{$set:{price:1200}})
// console.log(updatedProduct)

// DELETE

//const deletedProduct = await productsModel.deleteOne({name:'Ipad'})
//console.log(deletedProduct)
const products = await productsModel.find({})
console.log(products)

}
bdMongoose()
