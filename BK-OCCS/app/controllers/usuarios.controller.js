
import db from '../models/bdoccs.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const BDUsuarios = db.usuarios;
const BDRoles = db.rols;

export const login = async (req, res) => {
    
    // Aquí deberías verificar el usuario y la contraseña con tu base de datos
    if (!req.body.correo || !req.body.password) {
        res.status(204).send({
            mensaje: 'El contenido no puede estar vacio'
        });
        return;
    }

    //Creamos el modelo usuario
    const usuario = {
        correo: req.body.correo,
        password: req.body.password, 
    };

    const usuarioEncontrado = await BDUsuarios.findOne({ where: { correo: usuario.correo } });
    
    if(!usuarioEncontrado){
        return res.json({error: 'Error en email/Contraseña'})
    }

    const eq = bcrypt.compareSync(usuario.password, usuarioEncontrado.password)

    if(!eq){
        return res.json({error: 'Error en email/Contraseña'})
    }

    res.json({succes: 'Login Correcto', token: createToken(usuarioEncontrado)})

};

//CrearToken
function createToken(user){
    const payload = {
        user_id: user.id,
        user_rol: user.rol
    }
    return jwt.sign(payload, 'Organizacion Control Calidad Seguridad')

}

//Crear un usuario
export const CrearUsuario = async (req, res) => {
    
    if (!req.body.correo || !req.body.password || !req.body.rol) {
        res.status(204).send({
            mensaje: 'El contenido no puede estar vacio'
        });
        return;
    }

    const hashearContrasena = async (password) => {
        try {
                const salt = await bcrypt.genSalt(saltRounds);
                const hash = await bcrypt.hash(password, salt);
                return hash;
            } catch (err) {
                console.error(err);
                throw new Error('Error al hashear la contraseña');
            }
    };

    const contrasenaHasheada = await hashearContrasena(req.body.password);

    const usuario = {
        correo: req.body.correo,
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
    login,
    CrearUsuario,
}