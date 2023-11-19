import jwt from 'jsonwebtoken';
import db from '../models/bdoccs.js';

const BDUsuarios = db.usuarios;

//Generar una cookie con token que expira en 24 horas y reciba usuario y contraseña
export const generarTokenYCookie = (req, res) => {
    const { usuario, contrasena } = req.body;
  
    // Aquí deberías verificar el usuario y la contraseña con tu base de datos
    if(!usuario || !contrasena){
        res.status(400).send({
            mensaje: 'El contenido no puede estar vacio'
        });
        return;
    }

    BDUsuarios.findOne({ where: { usuario: usuario, contrasena: contrasena } })
        .then ((data) => {
            if (data) {
                // Si el usuario y la contraseña son válidos, entonces genera el token
                const token = jwt.sign({ usuario, contrasena }, 'tu_clave_secreta', { expiresIn: '24h' });
                res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // maxAge está en milisegundos
                res.status(200).send({ message: 'Cookie con token generada.' });
            }
            else {
                console.log('Usuario no encontrado');
            }
        })
        .catch((error) => {
            res.status(500).send({
                mensaje: 'Error al consultar el usuario'
            });
        });  
  };