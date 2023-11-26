import { Sequelize } from "sequelize";

export const config = new Sequelize("occsdb", "root", "", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 5, // maximo de conexiones
        min: 0, // minimo de conexiones
        require: 30000, // tiempo de espera
        idle: 10000 // tiempo maximo de inactividad
    }   
});