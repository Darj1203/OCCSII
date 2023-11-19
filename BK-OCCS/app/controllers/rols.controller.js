import db from '../models/bdoccs.js';
const BDRol = db.rols;

//Obtener todos los roles
export const BuscarTodos = (req, res) => {
    BDRol.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: error.message || 'Error al consultar los roles'
            });
        });
};

//Obtener un rol por id
export const BuscarUno = (req, res) => {
    const id = req.params.id;

    BDRol.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    mensaje: 'Rol no encontrado con el id: ' + id
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: 'Error al consultar el rol con el id: ' + id
            });
        });
};

//Crear un rol
export const CrearRol = (req, res) => {
    if (!req.body.rol) {
        res.status(400).send({
            mensaje: 'El contenido no puede estar vacio'
        });
        return;
    }

    const rol = {
        rol: req.body.rol
    };

    BDRol.create(rol)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: error.message || 'Error al crear el rol'
            });
        });
};

export default {
    BuscarTodos,
    BuscarUno,
    CrearRol
}