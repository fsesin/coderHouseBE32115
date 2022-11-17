import { Router } from 'express'
import passport from 'passport'
import { generarToken, verificarToken } from '../utils/jwt.js'

const router = Router()

router.post('/', (req, res) => {
  console.log(req.body)
  const token = generarToken(req.body)
  console.log(token)
  res.json({token})
})

router.get('/',verificarToken,(req,res)=>{
  res.send('todo ok')
})
export default router
