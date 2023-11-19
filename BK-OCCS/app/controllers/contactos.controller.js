import db from '../models/bdoccs.js';


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

//Crear un contacto
export const CrearContacto = (req, res) => {
    if (!req.body.nombre || !req.body.celular || !req.body.apartamento) {
        res.status(400).send({
            mensaje: 'El contenido no puede estar vacio'
        });
        return;
    }

    const contacto = {
        nombre: req.body.nombre,
        celular: req.body.celular,
        apartamento: req.body.apartamento
    };

    BDContactos.create(contacto)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: error.message || 'Error al crear el contacto'
            });
        });
};

//Actualizar un contacto por id
export const ActualizarContacto = (req, res) => {
    const id = req.params.id;

    BDContactos.update(req.body, {
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    mensaje: 'Contacto actualizado correctamente'
                });
            }
            else {
                res.send({
                    mensaje: 'No se pudo actualizar el contacto con el id: ' + id
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: 'Error al actualizar el contacto con el id: ' + id
            });
        });
};

//Eliminar un contacto por id
export const EliminarContacto = (req, res) => {
    const id = req.params.id;

    BDContactos.destroy({
        where: { id: id }
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    mensaje: 'Contacto eliminado correctamente'
                });
            }
            else {
                res.send({
                    mensaje: 'No se pudo eliminar el contacto con el id: ' + id
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: 'Error al eliminar el contacto con el id: ' + id
            });
        });
};