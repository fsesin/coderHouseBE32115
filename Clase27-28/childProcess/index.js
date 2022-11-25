function sumar(a,b){
    return a+b
}
process.on('exit',()=>{
    console.log('Este proceso se termino antes de tiempo')
})

console.log(sumar(5,2))
process.exit()
console.log(sumar(10,5))
//console.log(process.pid)
