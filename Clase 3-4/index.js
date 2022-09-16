// function sumar(num1, num2) {
//   let resultado = num1 + num2
//   return resultado
// }

// //console.log(sumar(4,5))

// const sumarArrow = (num1, num2) => {
//   let resultado = num1 + num2
//   return resultado
// }

// //console.log(sumarArrow(4,5))

// //const saludar = saludo =>

// //CALLBACKS

// function callback(parametro) {
//   return `El usuario escribio ${parametro}`
// }

// function principal(frase, cb) {
//   let respuesta = cb(frase)
//   return respuesta
// }

// //console.log(principal('mucho gusto',callback))

// let operacion = (num1, num2, funcionCB) => {
//   let resultado = funcionCB(num1, num2)
//   return resultado
// }

// let funcionSuma = (num1, num2) => num1 + num2
// let funcionResta = (num1, num2) => num1 - num2
// let funcionMultiplicacion = (num1, num2) => num1 * num2

// console.log(operacion(8, 5, funcionSuma))
// console.log(operacion(8, 5, funcionResta))
// console.log(operacion(8, 5, funcionMultiplicacion))

// let familiares = []
// let usuarios = []

// function agregarFamiliarCB(user, infoFamiliar) {
//   usuarios.findById(user.id, function (error, usuario) {
//     if (error) {
//       return error
//     } else {
//       familiares.findAllByLastName(
//         usuario.apellido,
//         function (error, familiares) {
//           if (error) {
//             return error
//           } else {
//             if (familiares.includes(infoFamiliar)) {
//               return 'Este usuario ya existe'
//             } else {
//               familiares.createOne(infoFamiliar, function (error) {
//                 if (error) {
//                   return error
//                 } else {
//                   return 'Familiar creado con exito'
//                 }
//               })
//             }
//           }
//         }
//       )
//     }
//   })
// }

// function agregarFamiliarPromesas(user, infoFamiliar) {
//   usuarios
//     .findById(user.id)
//     .then((usuario) => {
//       return familiares.findAllByLastName(usuario.lastName)
//     })
//     .then((familiares) => {
//       if (familiares.includes(infoFamiliar)) {
//         return 'Este usuario ya existe'
//       } else {
//         return familiares.createOne(infoFamiliar)
//       }
//     })
//     .then(() => 'Familiar creado con exito')
//     .catch((error) => {
//       return error
//     })
// }

// console.log('Primer console')
// setTimeout(() => {
//   console.log('Segundo console')
// }, 0)

// console.log('Tercer console')

function servidor(consulta, funcionCB) {
  setInterval(function () {
    const respuesta = `${consulta} esta llena`
    funcionCB(respuesta)
  }, 2000)
}


function obtenerResultados(resultado){
    console.log(`Respuesta del servidor: ${resultado}`)
}

servidor("La base de datos",obtenerResultados)
