let numeros = {}

const numeroAleatorio = () => Math.floor(Math.random()*20)+1

for(let i=0;i<10000;i++){
const numero = numeroAleatorio()
if(!numeros[numero])numeros[numero] = 0
numeros[numero]++
}

console.log(numeros)