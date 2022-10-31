import { MongoClass } from '../contenedores/MongoClass.js'
import { productsModel } from '../models/products.js'
import { mockProducts } from '../../utils/mocks.js'


class ProductsMongoDAO extends MongoClass {
  constructor() {
    super(productsModel)
  }

  async save(cant){
    const productsResponse = []
    for(let i=1;i<=cant;i++){
        const mockProduct = mockProducts()
        const productCreated = await this.create(mockProduct)
        productsResponse.push(productCreated)
    }
    return productsResponse
  }
}

export default ProductsMongoDAO