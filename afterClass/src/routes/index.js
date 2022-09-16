const { Router } = require('express')
const fs = require('fs')
const dataValidation = require('../middlewares/index.js')
const router = Router()

let productsArray = []

let readProductsFile = async () => {
  try {
    const productsFile = await fs.promises.readFile('products.txt', 'utf-8')
    productsArray = JSON.parse(productsFile)
  } catch (error) {
    console.log(error)
  }
}

router.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/src/files/index.html')
})

router.post('/',dataValidation, async (req, res) => {
  const { body } = req
  try {
    await readProductsFile()
    let id =
      productsArray.length !== 0
        ? productsArray[productsArray.length - 1].id + 1
        : 1
    productsArray.push({ ...body, id })
    await fs.promises.writeFile('products.txt',JSON.stringify(productsArray))
    res.status(200).json({mensaje:'Producto agregado con exito',productos:productsArray})
  } catch (error) {
    res.status(400).json(error)
  }
})

// router.delete()

module.exports = router
