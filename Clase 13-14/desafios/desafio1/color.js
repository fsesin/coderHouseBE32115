const obtenerNumero = () => Math.round(Math.random()*255)

class Color {
    getColor(){
        let colorAleatorio = `rgb(${obtenerNumero()},${obtenerNumero()},${obtenerNumero()})`
        return colorAleatorio
    }
}

const nuevoColor = new Color()
console.log(nuevoColor.getColor())