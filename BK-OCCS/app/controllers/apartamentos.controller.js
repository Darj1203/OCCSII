import db from '../models/bdoccs.js';

const Op = db.Sequelize.Op;
const BDApartamento = db.apartamentos;

//Obtener todos los apartamentos
export const BuscarTodos = (req, res) => {
    BDApartamento.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: error.message || 'Error al consultar los apartamentos'
            });
        });
};

//Obtener un apartamento por id
export const BuscarUno = (req, res) => {
    const id = req.params.id;

    BDApartamento.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    mensaje: 'Apartamento no encontrado con el id: ' + id
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: 'Error al consultar el apartamento con el id: ' + id
            });
        });
};