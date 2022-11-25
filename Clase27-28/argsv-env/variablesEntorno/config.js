import dotenv from 'dotenv'
dotenv.config()


export const config = {
    PORT: process.env.PUERTO || 0,
    MODO: process.env.MODO || 'prod',
    DEBUG: process.env.DEBUG || false
}