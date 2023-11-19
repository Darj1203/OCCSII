import db from '../models/bdoccs.js';

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

//Crear un apartamento 
export const CrearApartamento = (req, res) => {
    if (!req.body.torre || !req.body.apartamento) {
        res.status(400).send({
            mensaje: 'El contenido no puede estar vacio'
        });
        return;
    }

    const apartamento = {
        torre: req.body.torre,
        apartamento: req.body.apartamento
    };

    BDApartamento.create(apartamento)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: error.message || 'Error al crear el apartamento'
            });
        });
};

//Actualizar un apartamento por id
export const ActualizarApartamento = (req, res) => {
    const id = req.params.id;

    BDApartamento.update(req.body, {
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    mensaje: 'Apartamento actualizado correctamente'
                });
            }
            else {
                res.send({
                    mensaje: 'No se pudo actualizar el apartamento con el id: ' + id
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: 'Error al actualizar el apartamento con el id: ' + id
            });
        });
};

//Eliminar un apartamento por id
export const EliminarApartamento = (req, res) => {
    const id = req.params.id;

    BDApartamento.destroy({
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    mensaje: 'Apartamento eliminado correctamente'
                });
            }
            else {
                res.send({
                    mensaje: 'No se pudo eliminar el apartamento con el id: ' + id
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: 'Error al eliminar el apartamento con el id: ' + id
            });
        });
};