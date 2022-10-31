import { Router } from 'express'
import ProductsMongoDAO from '../persistencia/daos/productsMongoDAO.js'
//import { mockProducts } from '../utils/mocks.js'

const router = Router()
const productsMongo = new ProductsMongoDAO()

router.get('/', async (req, res) => {
  const products = await productsMongo.getAll()
  if (products.length !== 0) {
    res.json({ products })
  } else {
    res.json({ mensaje: 'no hay productos actualmente' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const product = await productsMongo.getById(id)
  if (product.length !== 0) {
    res.json({ product })
  } else {
    res.json({ mensaje: 'no existe un producto con ese id' })
  }
})

// router.post('/', async (req, res) => {
//   const mockProduct = mockProducts()
//   const createdProduct = await productsMongo.create(mockProduct)
//   res.json({ mensaje: 'Producto creado con exito', product: createdProduct })
// })
router.post('/', async (req, res) => {
  const createdProduct = await productsMongo.save(1)
  res.json({ mensaje: 'Producto creado con exito', product: createdProduct })
})

router.post('/popular', async (req, res) => {
  const { cant } = req.query
  const max = cant || 50
  const createdProduct = await productsMongo.save(max)
  res.json({ mensaje: 'Producto creado con exito', product: createdProduct })
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedProduct = await productsMongo.delete(id)
    res.json({
      mensaje: 'Producto eliminado con exito',
      product: deletedProduct,
    })
  } catch (error) {
    console.log(error)
  }
})
export default router
