import { normalize, schema } from 'normalizr'
import {inspect} from 'util'
const data = {
  id: '999',
  posts: [
    {
      id: '123',
      author: {
        id: '1',
        nombre: 'Pablo',
        apellido: 'Perez',
        DNI: '20442654',
        direccion: 'CABA 123',
        telefono: '1567876547',
      },
      title: 'My awesome blog post',
      comments: [
        {
          id: '324',
          commenter: {
            id: '2',
            nombre: 'Nicole',
            apellido: 'Gonzalez',
            DNI: '20442638',
            direccion: 'CABA 456',
            telefono: '1567811543',
          },
        },
        {
          id: '325',
          commenter: {
            id: '3',
            nombre: 'Pedro',
            apellido: 'Mei',
            DNI: '20446938',
            direccion: 'CABA 789',
            telefono: '1567291542',
          },
        },
      ],
    },
    {
      id: '1123',
      author: {
        id: '2',
        nombre: 'Nicole',
        apellido: 'Gonzalez',
        DNI: '20442638',
        direccion: 'CABA 456',
        telefono: '1567811543',
      },
      title: 'My awesome blog post',
      comments: [
        {
          id: '1324',
          commenter: {
            id: '1',
            nombre: 'Pablo',
            apellido: 'Perez',
            DNI: '20442654',
            direccion: 'CABA 123',
            telefono: '1567876547',
          },
        },
        {
          id: '1325',
          commenter: {
            id: '3',
            nombre: 'Pedro',
            apellido: 'Mei',
            DNI: '20446938',
            direccion: 'CABA 789',
            telefono: '1567291542',
          },
        },
      ],
    },
    {
      id: '2123',
      author: {
        id: '3',
        nombre: 'Pedro',
        apellido: 'Mei',
        DNI: '20446938',
        direccion: 'CABA 789',
        telefono: '1567291542',
      },
      title: 'My awesome blog post',
      comments: [
        {
          id: '2324',
          commenter: {
            id: '2',
            nombre: 'Nicole',
            apellido: 'Gonzalez',
            DNI: '20442638',
            direccion: 'CABA 456',
            telefono: '1567811543',
          },
        },
        {
          id: '2325',
          commenter: {
            id: '1',
            nombre: 'Pablo',
            apellido: 'Perez',
            DNI: '20442654',
            direccion: 'CABA 123',
            telefono: '1567876547',
          },
        },
      ],
    },
  ],
}

const usersEntity = new schema.Entity('users')
const comentsEntity = new schema.Entity('comments', {
  commenter: usersEntity,
})
const postsEntity = new schema.Entity('posts', {
  author: usersEntity,
  comments: [comentsEntity],
})

const dataEntity = new schema.Entity('data', {
  posts: [postsEntity],
})

const dataNormalized = normalize(data,dataEntity)

function print(obj) {
    console.log(inspect(obj, false, 12, true))
  }

  print(dataNormalized)

  console.log('data original',JSON.stringify(data).length)
  console.log('data normalizada',JSON.stringify(dataNormalized).length)

  const ahorro =
  ((JSON.stringify(data).length - JSON.stringify(dataNormalized).length) /
    JSON.stringify(data).length) *
  100
console.log('ahorro', ahorro)