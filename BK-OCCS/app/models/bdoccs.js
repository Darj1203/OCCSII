import { Sequelize } from "sequelize";
import ApartamentoModel from "./apartamentos.model.js";
import ContactosModel from "./contactos.model.js";
import UsuariosModel from "./usuarios.model.js";
import { config } from "./config.js";

const db = {};

db.Sequelize = Sequelize;
db.config = config;

//importar los modelos
db.apartamentos = ApartamentoModel(config, Sequelize);
db.contactos = ContactosModel(config, Sequelize, db.apartamentos);
db.usuarios = UsuariosModel(config, Sequelize);


export default db;