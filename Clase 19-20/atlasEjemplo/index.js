import mongoose from 'mongoose'

const productosSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  stock: { type: Number },
})
const productosModel = mongoose.model('Productos', productosSchema)

const producto1 = {
  name: 'Iphone',
  price: 500,
  stock: 20,
}
const productos = [
  {
    name: 'Ipad',
    price: 200,
    stock: 10,
  },
  { name: 'TV', price: 800, stock: 25 },
  {
    name: 'Computador',
    price: 1000,
    stock: 40,
  },
]
const URL =
  'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/atlasEjemplo?retryWrites=true&w=majority'

mongoose
  .connect(URL)
//   .then(() => {
//     console.log('Conectado a Atlas')
    
//       return productos.forEach((prod) => {
//         const producto = new productosModel(prod)
//         return producto.save()
//       })
    
//   })
.then(()=>{
    return productosModel.deleteOne({name:'Computador'})
})
  .then(() => {
    return productosModel.find({})

  })
  .then(result=>{
    console.log(result)
  })
  .catch((err) => console.log(err))
