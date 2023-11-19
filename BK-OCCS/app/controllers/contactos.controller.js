import db from '../models/bdoccs.js';

const Op = db.Sequelize.Op;
const BDContactos = db.contactos;

//Obtener todos los contactos
export const BuscarTodos = (req, res) => {
    BDContactos.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: error.message || 'Error al consultar los contactos'
            });
        });
};

//Obtener un contacto por id
export const BuscarUno = (req, res) => {
    const id = req.params.id;

    BDContactos.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    mensaje: 'Contacto no encontrado con el id: ' + id
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: 'Error al consultar el contacto con el id: ' + id
            });
        });
};