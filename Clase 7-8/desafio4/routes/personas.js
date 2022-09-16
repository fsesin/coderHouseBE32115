const {Router} = require('express')

const router = Router()
const personas = []
function primerMiddleware(req,res,next){
    console.log('mi primer middleware')
    next()
}
function segundoMiddleware(req,res,next){
    if(req.body.nombre==="Fede"){
        return res.send('No se puede crear a esta persona')
    } 
    console.log(req.body)
    next()
}

router.get('/',primerMiddleware,(req,res)=>{
    res.json({personas})
})


router.post('/',segundoMiddleware,(req,res)=>{
    const persona = req.body
    //console.log(persona)
    personas.push(persona)
    res.send('Persona guardada con exito')
})
module.exports = router


