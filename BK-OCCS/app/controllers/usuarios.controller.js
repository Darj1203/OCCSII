import jwt from 'jsonwebtoken';
import db from '../models/bdoccs.js';

import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const BDUsuarios = db.usuarios;

export const generarTokenYCookie = async (req, res) => {
    
    // Aquí deberías verificar el usuario y la contraseña con tu base de datos
    if (!req.body.usuario || !req.body.contrasena) {
        res.status(204).send({
            mensaje: 'El contenido no puede estar vacio'
        });
        return;
    }

    //Creamos el modelo usuario
    const usuario = {
        correo: req.body.usuario,
        password: req.body.contrasena, 
    };

    const usuarioEncontrado = await BDUsuarios.findOne({ where: { correo: usuario.correo } });
    if (usuarioEncontrado) {
        const contrasenaValida = await bcrypt.compare(usuario.password, usuarioEncontrado.password);

        if (contrasenaValida) {
            // Generar el token
            const token = jsonwebtoken.sign({ correo: usuario.correo }, 'ClaveParaHashear123', { expiresIn: '24h' })
            // Establecer la cookie en la respuesta
            res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
            res.status(202).send({ mensaje: 'Inicio de sesión exitoso.' });
        } else {
            res.status(401).send({ mensaje: 'Contraseña incorrecta' });
        }
    } else {
        res.status(404).send({ mensaje: 'El correo no está en nuestro servidor' });
    }
};

//Verificar si el usuario tiene un token valido
export const verificarToken = (req, res, next) => {
    // Obtener el token de la cookie
    const token = req.cookies.token;
  
    // Si no hay token, entonces no está autorizado
    if (!token) {
      return res.status(401).send({ message: 'No se proporcionó un token.' });
    }
  
    // Verificar si el token es válido
    jwt.verify(token, 'ClaveParaHashear123', (err, decodedToken) => {
      if (err) {
        console.log(err);
        return res.status(401).send({ message: 'Token inválido.' });
      } else {
        console.log(decodedToken);
        next();
      }
    });
};

//Cerrar sesión
export const cerrarSesion = (req, res) => {
    res.cookie('token', '', { maxAge: 1 });
    res.status(423).send({ message: 'Sesión cerrada.' });
};

//Crear un usuario
export const CrearUsuario = async (req, res) => {
    
    if (!req.body.usuario || !req.body.contrasena || !req.body.rol) {
        res.status(204).send({
            mensaje: 'El contenido no puede estar vacio'
        });
        return;
    }

    const hashearContrasena = async (contrasena) => {
        try {
                const salt = await bcrypt.genSalt(saltRounds);
                const hash = await bcrypt.hash(contrasena, salt);
                return hash;
            } catch (err) {
                console.error(err);
                throw new Error('Error al hashear la contraseña');
            }
    };

    const contrasenaHasheada = await hashearContrasena(req.body.contrasena);

    const usuario = {
        correo: req.body.usuario,
        password: contrasenaHasheada,
        rol: req.body.rol,
    };

    BDUsuarios.create(usuario)
        .then(() => {
            res.status(200).send('Usuario creado correctamente');
        })
        .catch((err) => {
            res.status(500).send({
                mensaje: err.message || 'Error al crear el usuario',
            });
        });
};

export default {
    generarTokenYCookie,
    verificarToken,
    cerrarSesion,
    CrearUsuario
}