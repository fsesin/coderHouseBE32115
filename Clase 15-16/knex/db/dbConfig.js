import knex from 'knex'

//Config mysql
// const config = {
//   client: 'mysql',
//   connection: {
//     host: 'localhost',
//     user: 'root',
//     password: '12345678',
//     database: 'knex_mysql',
//   },
// }

//Config sqlite
const config = {
  client:'sqlite3',
  connection: {
    filename:'./db/knex_sqlite'
  }
}

export const db = knex(config)
