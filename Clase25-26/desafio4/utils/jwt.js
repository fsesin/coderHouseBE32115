import jwt from 'jsonwebtoken';

const JWT_KEY = 'jwtKey'

export function generarToken(usuario){
    const token = jwt.sign({ data: usuario }, JWT_KEY, { expiresIn: '24h' })
    return token  
}

export function verificarToken(req,res,next){
    const authHeader = req.headers["Authorization"] || req.headers["authorization"]

    if(authHeader){
    // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5vbWJyZSI6Ikp1YW4iLCJhcGVsbGlkbyI6IkhveW9zIn0sImlhdCI6MTY2ODI3ODg4MiwiZXhwIjoxNjY4MzY1MjgyfQ.j-o4KyFUoueMmNuZF0VH176KjRvYGNP7DrI-pXCdZB0"
    const token = authHeader.split(' ')[1]
    const user = jwt.verify(token,JWT_KEY)
    console.log(user)
    next(user)
}
}