class Contador {
  static cuentaGlobal = 0

  constructor(responsable) {
    this.responsable = responsable
    this.cuentaIndividual = 0
  }

  definirResponsable() {
    return this.responsable
  }

  obtenerCuentaIndividual() {
    return this.cuentaIndividual
  }

  obtenerCuentaGlobal() {
    return Contador.cuentaGlobal
  }

  contar() {
    this.cuentaIndividual++
    Contador.cuentaGlobal++
  }
}

const contador1 = new Contador('Jose')
const contador2 = new Contador('Andres')

//console.log(contador1)
contador1.contar()
contador1.contar()
// console.log(
//   `La cuenta individual de 1 es ${contador1.obtenerCuentaIndividual()}`
// )
// console.log(`La cuenta global es ${contador1.obtenerCuentaGlobal()}`)
contador2.contar()
contador2.contar()
// console.log(
//   `La cuenta individual de 2 es ${contador2.obtenerCuentaIndividual()}`
// )
// console.log(`La cuenta global es ${contador2.obtenerCuentaGlobal()}`)
console.log(Contador.cuentaGlobal)
