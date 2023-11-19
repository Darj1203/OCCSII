import { Sequelize } from "sequelize";

<<<<<<< HEAD
export const config = new Sequelize("occsdb", "root", "Tattan123", {
=======
export const config = new Sequelize("occsdb", "root", "", {
>>>>>>> f67d28463503dd38661605267a3ecbc38c20a416
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