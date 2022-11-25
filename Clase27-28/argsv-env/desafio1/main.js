import minimist from "minimist";

const options = {
    default:{
        m: 'prod',
        p: 0,
        d: false
    },
    alias:{
        m: 'modo',
        p: 'puerto',
        d: 'debug'
    }
}
const {modo, puerto, debug, _} = minimist(process.argv.slice(2),options)
console.log({modo,puerto,debug,otros:_})