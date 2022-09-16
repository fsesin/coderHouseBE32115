//1
// function mostrarLista(array) {
//   if (array.length === 0) {
//     console.log('lista vacia')
//   } else {
//     console.log(array)
//   }
// }

// mostrarLista([])
// mostrarLista([1,2,3])

//2

// !function (array) {
//   if (array.length === 0) {
//     console.log('lista vacia')
//   } else {
//     console.log(array)
//   }
// }([1,2,3])

//3
function crearMultiplicador(num1){
    return function(num2){
        return num1*num2
    }
}

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

console.log(duplicar(4))
console.log(duplicar(5))
console.log(triplicar(4))
console.log(triplicar(5))
