import yargs from 'yargs';

const info = yargs(process.argv.slice(2)).alias({nombre:'name',apellido:'lastname', _:'list'}).default({nombre:'Juan'}).argv
const infoDesafio = yargs(process.argv.slice(2)).alias({m:'modo',p:'puerto',d:'debug'}).default({m:'prod',p:0,d:false}).boolean('d').argv
const {modo,puerto,debug,_:otros} = infoDesafio
console.log({modo,puerto,debug,otros})





//console.log(info)