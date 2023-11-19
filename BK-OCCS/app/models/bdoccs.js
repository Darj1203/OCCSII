import { Sequelize } from "sequelize";
import ApartamentoModel from "./apartamentos.model.js";
import ContactosModel from "./contactos.model.js";
import UsuariosModel from "./usuarios.model.js";
import RolsModel from "./rols.model.js";
import { config } from "./config.js";

const db = {};

db.Sequelize = Sequelize;
db.config = config;

//importar los modelos
db.apartamentos = ApartamentoModel(config, Sequelize);
db.contactos = ContactosModel(config, Sequelize, db.apartamentos);
db.rols = RolsModel(config, Sequelize);
db.usuarios = UsuariosModel(config, Sequelize, db.rols);

export default db;