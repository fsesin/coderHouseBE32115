import jwt from 'jsonwebtoken'

const JWT_KEY = 'jwtKey'

export function generarToken(usuario) {
 const token = jwt.sign({ data: usuario }, JWT_KEY, { expiresIn: '24h' })
 return token   
}

export function verificarToken() {}
