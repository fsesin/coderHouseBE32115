const {Router} = require('express')

const router = Router()

let frase = 'Hola mundo como estan'

router.get('/:num', (req, res) => {
    const { num } = req.params
    try {
      const array = frase.split(' ')
      const palabra = array[num - 1]
      res.status(200).json({ buscadas: palabra })
    } catch (error) {
      res.status(400).send(error)
    }
  })
  
  router.post('/', (req, res) => {
    const { palabra } = req.body
    const array = frase.split(' ')
    array.push(palabra)
    frase = array.join(' ')
    res.json({
      agregada: palabra,
      pos: array.length,
    })
  })
  
  router.put('/:pos', (req, res) => {
    const { pos } = req.params
    const { palabra } = req.body
    const array = frase.split(' ')
    const palabraEliminada = array[pos - 1]
    array[pos - 1] = palabra
    frase = array.join(' ')
    //console.log(frase)
    res.json({
      actualizada: palabra,
      anterior: palabraEliminada,
    })
  })
  
  router.delete('/:pos',(req,res)=>{
      const { pos } = req.params
      const array = frase.split(' ')
      const palabraEliminada = array[pos-1]
      array.splice(pos-1,1)
      frase = array.join(' ')
      //console.log(frase)
      res.json({palabraEliminada})
  
  })
module.exports = router