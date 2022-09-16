const productos = [
{id:1,nombre:'Escuadra',precio:323.45},
{id:2,nombre:'Calculadora',precio:234.56},
{id:3,nombre:'Globo',precio:45.67},
{id:4,nombre:'Paleta',precio:456.78},
{id:5,nombre:'Reloj',precio:67.89},
{id:6,nombre:'Agenda',precio:78.90},
]

const getNombres = () => productos.map(prod=>prod.nombre).join(',')
const precioTotal = () =>{
    let total = 0
    productos.forEach(prod=>{
        total = total + prod.precio
    })
    return total
}
const precioPromedio = () => precioTotal()/productos.length
const precioMinimo = () =>{
    let min = productos[0].precio
    let prodMin = productos[0].nombre

    for(let producto of productos){
        if(producto.precio<min){
            min = producto.precio
            prodMin = producto.nombre
        }
    }
    return prodMin
}
const precioMax = () =>{
    let max = productos[0].precio
    let prodMax = productos[0].nombre

    for(let producto of productos){
        if(producto.precio>max){
            max = producto.precio
            prodMax = producto.nombre
        }
    }
    return prodMax
}

function decimales(numero){
    return Number(numero.toFixed(2))
}

let objeto = {
    nombres: getNombres(),
    total: decimales(precioTotal()),
    promedio: decimales(precioPromedio()),
    min: precioMinimo(),
    max: precioMax()
}
console.log(objeto)