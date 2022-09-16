function mostrasLetras(palabra, cb) {
  let i = 0
  let interval = setInterval(() => {
    if (i < palabra.length) {
      console.log(palabra[i])
      i++
    } else {
      clearInterval(interval)
      cb()
    }
  }, 1000)
}

const fin = () => console.log('termine')

//mostrasLetras('hola',fin)

setTimeout(() => {
    mostrasLetras('hola',fin)
}, 0);

setTimeout(() => {
    mostrasLetras('hola',fin)
}, 250);

setTimeout(() => {
    mostrasLetras('hola',fin)
}, 500);
