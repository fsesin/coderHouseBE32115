const {Router} = require('express')

const router = Router()
const mascotas = []

router.get('/',(req,res)=>{
    res.json({mascotas})
})


router.post('/',(req,res)=>{
    const mascota = req.body
    mascotas.push(mascota)
    res.send('Mascota guardada con exito')
})
module.exports = router