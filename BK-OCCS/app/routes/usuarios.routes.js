import usuariosController from '../controllers/usuarios.controller.js';
import express from 'express';

const router = express.Router(); 

// Crear nuestras rutas
router.post('/autorizar', usuariosController.generarTokenYCookie);
router.post('/verificar', usuariosController.verificarToken);
router.post('/cerrarsesion', usuariosController.cerrarSesion);
router.post('/crearusuario', usuariosController.CrearUsuario);

export default router;