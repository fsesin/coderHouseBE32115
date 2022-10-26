import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('sequelize_mysql','root','12345678',{
    host:'localhost',
    dialect:'mysql'
})