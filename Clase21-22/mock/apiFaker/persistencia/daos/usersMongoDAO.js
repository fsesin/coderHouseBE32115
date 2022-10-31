import { MongoClass } from '../contenedores/MongoClass.js'
import { usersModel } from '../models/users.js'

class UsersMongoDAO extends MongoClass {
  constructor() {
    super(usersModel)
  }
}

export default UsersMongoDAO