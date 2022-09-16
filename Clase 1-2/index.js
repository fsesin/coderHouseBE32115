// //console.log('Primer log')

// let primeraVariable = "Mi primera variable"
// const nombre = ["Farid"]
// nombre[0] = "Juan"
// nombre.push("Carlos")
// console.log(nombre)
// {
//     var variableVar = 5
//     let segundaVariable = "Mi segunda variable"
//     //console.log('1------',segundaVariable)

// }
// //console.log(variableVar)
// //console.log('2------',primeraVariable)

const nombre = 'pepe'
let edad = 25
const precio = 99.9
const series = ['Dark', 'Mr Robot', 'Castlevania']
const peliculas = [
  { nombre: 'Nemo', ano: 2005, protagonistas: ['Nemo', 'Papa', 'Dory'] },
  { nombre: 'Titanic', ano: 1998, protagonistas: ['Leonardo', 'Kate'] },
  { nombre: 'Interestelar', ano: 2014, protagonistas: ['Juan', 'Andrea'] },
]
//console.log(nombre,edad,precio,series,peliculas)
edad++
//console.log(edad)
series.push('Megamind')
//console.log(series)

function sumar(num1, num2) {
  let resultado = num1 + num2
  return resultado
}

let respuesta = sumar(10, 4)
//console.log(respuesta)

let resta = function (a, b) {
  //bloque de codigo
}

// !function(a,b){
//     let valor = a
//     for(let i =0;i<b;i++){
//         valor = valor + 2
//     }
//     console.log(valor)
// }(5,8)

// function ejemploScope(){
// let i = 0
// for(let j=0;j<10;j++){
//     let k = i + j
//     i = k+1
// }
// console.log(`i------ ${i}`)
// //console.log(`k------${k}`)
// }

// ejemploScope()

class Animal {
  constructor(tipo, nombre, edad, dueno) {
    this.tipo = tipo
    this.nombre = nombre
    this.edad = edad
    this.dueno = dueno
  }

  name() {
    return this.nombre
  }
}

const primerAnimal = new Animal('gato', 'Michu', 5, 'Yerson')
//console.log(primerAnimal.name())
const segundoAnimal = new Animal('perro', 'Firulais', 10, 'Mauri')
//console.log(segundoAnimal.name())

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre
    this.email = email
    this.password = password
  }

  tieneEmail() {
    if (this.email) {
      return true
    } else {
      return false
    }
  }

  actualizarPassword(newPassword) {
    this.password = newPassword
  }
}

const usuario1 = new Usuario('Juan','email@email.com','12345')
const usuario2 = new Usuario('Caro',null,'abcde')
console.log(usuario2)
usuario2.actualizarPassword('12345')
console.log(usuario2)

