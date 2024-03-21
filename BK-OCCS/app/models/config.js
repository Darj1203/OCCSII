import { Sequelize } from "sequelize";

export const config = new Sequelize("ppjcwciu_OCCSBD", "ppjcwciu_OCCSuser", "U_x=WK6K@#lf", {
    host: "216.246.46.37",
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 5, // maximo de conexiones
        min: 0, // minimo de conexiones
        require: 30000, // tiempo de espera
        idle: 10000 // tiempo maximo de inactividad
    }   
});