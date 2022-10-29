import { Router } from "express";
const router = Router()

router.get('/',async(req,res)=>{
    const todos = await 'nombreModel'.buscarTodos()
    res.json(todos)
})


export default router