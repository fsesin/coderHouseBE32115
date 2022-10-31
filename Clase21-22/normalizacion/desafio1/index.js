import { normalize, schema, denormalize } from 'normalizr'
import { inspect } from 'util'

export const empresa = {
  id: '1000',
  nombre: 'Coderhouse',
  gerente: {
    id: '2',
    nombre: 'Pedro',
    apellido: 'Mei',
    DNI: '20442639',
    direccion: 'CABA 457',
    telefono: '1567811544',
  },
  encargado: {
    id: '3',
    nombre: 'Pablo',
    apellido: 'Blanco',
    DNI: '20442640',
    direccion: 'CABA 458',
    telefono: '1567811545',
  },
  empleados: [
    {
      id: '1',
      nombre: 'Nicole',
      apellido: 'Gonzalez',
      DNI: '20442638',
      direccion: 'CABA 456',
      telefono: '1567811543',
    },
    {
      id: '2',
      nombre: 'Pedro',
      apellido: 'Mei',
      DNI: '20442639',
      direccion: 'CABA 457',
      telefono: '1567811544',
    },
    {
      id: '3',
      nombre: 'Pablo',
      apellido: 'Blanco',
      DNI: '20442640',
      direccion: 'CABA 458',
      telefono: '1567811545',
    },
    {
      id: '4',
      nombre: 'Ana',
      apellido: 'Rojo',
      DNI: '20442641',
      direccion: 'CABA 459',
      telefono: '1567811546',
    },
    {
      id: '5',
      nombre: 'Lucia',
      apellido: 'Sorbo',
      DNI: '20442642',
      direccion: 'CABA 460',
      telefono: '1567811547',
    },
    {
      id: '6',
      nombre: 'Jose',
      apellido: 'Pieres',
      DNI: '20442643',
      direccion: 'CABA 461',
      telefono: '1567811548',
    },
    {
      id: '7',
      nombre: 'Maria',
      apellido: 'Lopez',
      DNI: '20442644',
      direccion: 'CABA 462',
      telefono: '1567811549',
    },
  ],
}

// normalizando la informacion de empresa

const empleadoEntity = new schema.Entity('empleado')

const empresaEntity = new schema.Entity('empresa', {
  gerente: empleadoEntity,
  encargado: empleadoEntity,
  empleados: [empleadoEntity],
})

const empresaNormalized = normalize(empresa, empresaEntity)
console.log('Data original', JSON.stringify(empresa).length)
console.log('Data normalizada', JSON.stringify(empresaNormalized).length)
const ahorro =
  ((JSON.stringify(empresa).length - JSON.stringify(empresaNormalized).length) /
    JSON.stringify(empresa).length) *
  100
console.log('ahorro', ahorro)
function print(obj) {
  console.log(inspect(obj, false, 12, true))
}

print(empresaNormalized)

// desnormalizarla

const empresaDenormalized = denormalize(
  empresaNormalized.result,
  empresaEntity,
  empresaNormalized.entities
)
console.log('Data original', JSON.stringify(empresa).length)
console.log('Data desnormalizada', JSON.stringify(empresaDenormalized).length)
print(empresaDenormalized)