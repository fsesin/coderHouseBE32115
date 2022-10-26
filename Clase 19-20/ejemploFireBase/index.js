
let admin = require("firebase-admin");

let serviceAccount = require("./coderhousebe-firebase-adminsdk-j79aj-6d64703965.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const bdFirebase = admin.firestore()
const productsCollection = bdFirebase.collection('Products')

console.log('Conectado a firebase')

//Guardar producto

// async function createProduct(){
// const product1 = {
//     name:'TV',
//     price: 1000,
//     stock:25
// }
// try {
//     await productsCollection.doc().create(product1)
//     console.log('Producto creado con exito')
// } catch (error) {
//     console.log(error)
// }
// }

// createProduct()

// Leer
async function readAll(){
    try {
        const productos = await productsCollection.get()
        const productosArray = productos.docs.map(producto=>{
            return {
                id: producto.id,
                name:producto.data().name,
                price:producto.data().price,
                stock:producto.data().stock
            }
        })
        console.log(productosArray)
    } catch (error) {
        console.log(error)
    }
}
readAll()
