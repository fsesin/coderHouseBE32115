const joi = require('joi')

const verificationObject = joi.object({
  nombre: joi.string().required(),
  precio: joi.number().min(1).required(),
  stock: joi.number().min(0).required(),
})

const dataValidation = async (req, res, next) => {
  try {
    const { body } = req
    await verificationObject.validateAsync(body)
    next()
  } catch (error) {
    res.status(400).json({ error: 'Hay algun error en la data ingresada' })
  }
}

module.exports = dataValidation
