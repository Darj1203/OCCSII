import { Sequelize } from "sequelize";
import ApartamentoModel from "./apartamentos.model.js";
import { config } from "./config.js";

const db = {};

db.Sequelize = Sequelize;
db.config = config;

//importar los modelos
db.apartamentos = ApartamentoModel(config, Sequelize);

export default db;