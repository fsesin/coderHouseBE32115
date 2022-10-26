import { DataTypes } from 'sequelize'
import { sequelize } from '../dbConfig.js'

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  price:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  stock:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
})

export default Product