import { Router } from 'express'
import Product from '../db/models/ProductModel.js'
const router = Router()

router.get('/', async (req, res) => {
  const products = await Product.findAll()
  if (products.length !== 0) {
    res.json({ products })
  } else {
    res.json('No hay productos en la base de datos')
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findByPk(id)
  if (product) {
    res.json({ product })
  } else {
    res.json('Producto no existe en la base de datos')
  }
})

router.post('/', async (req, res) => {
  const productObj = req.body
  const productCreated = await Product.create(productObj)
  res.json({ mensaje: 'Producto creado con exito', product: productCreated })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name, price, stock } = req.body
  //   const product = await Product.findByPk(id)
  //   product.name = productObj.name
  //   product.price = productObj.price
  //   product.stock = productObj.stock
  //   product.save()
  const product = await Product.update(
    { name, price, stock },
    { where: { id } }
  )
  res.json({ mensaje: 'Producto modificado con exito', product })
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const productDeleted = await Product.destroy({ where: { id } })
  res.json({ mensaje: 'Producto eliminado con exito', product: productDeleted })
})

export default router
