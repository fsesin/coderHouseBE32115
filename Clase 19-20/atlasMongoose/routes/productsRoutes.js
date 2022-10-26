import { Router } from 'express'
import { productsModel } from '../db/models/products.js'

const router = Router()

router.get('/', async (req, res) => {
  const products = await productsModel.find({})
  if (products.length !== 0) {
    res.json({ products })
  } else {
    res.send('No hay productos actualmente')
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const product = await productsModel.findById(id)
  if (product) {
    res.json({ product })
  } else {
    res.send('No hay producto con ese id')
  }
})

router.post('/', async (req, res) => {
  const producto = req.body
  const productoCreado = await new productsModel(producto).save()
  res.json({ mensaje: 'Producto creado con exito', product: productoCreado })
})

router.put('/:id',async(req,res)=>{
    const {id} = req.params
    const productoAct = await productsModel.updateOne({_id:id},{$set:req.body})
    res.json({mensaje:'Producto actualizado con exito',product: productoAct})
})

router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const productoEliminado = await productsModel.deleteOne({_id:id})
    res.json({mensaje:'Producto eliminado con exito', product: productoEliminado})
})

export default router
