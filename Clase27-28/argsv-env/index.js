import minimist from 'minimist'

//const options = {default:{nombre:'Juan',edad:35}}
const options = {alias:{nombre:'name'}}


console.log(process.argv)
console.log(minimist(process.argv,options))



//console.log('hola a todos')
//console.log(process.argv.slice(2))