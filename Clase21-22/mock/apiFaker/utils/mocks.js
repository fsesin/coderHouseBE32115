import {faker} from '@faker-js/faker/locale/es'

export function mockProducts(){
    const product = {
        name:faker.commerce.product(),
        price:faker.commerce.price(),
        stock:faker.commerce.price(1, 40, 0)
    }
    return product
}