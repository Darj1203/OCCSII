import usuariosController from '../controllers/usuarios.controller.js';
import express from 'express';

const router = express.Router(); 

// Crear nuestras rutas
router.post('/autorizar', usuariosController.login);
router.post('/crearusuario', usuariosController.CrearUsuario);

export default router;