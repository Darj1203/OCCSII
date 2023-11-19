import usuariosController from '../controllers/usuarios.controller.js';
import express from 'express';

const router = express.Router(); 

// Crear nuestras rutas
router.get('/', usuariosController.generarTokenYCookie);
router.get('/', usuariosController.verificarToken);
router.post('/', usuariosController.cerrarSesion);
router.post('/', usuariosController.CrearUsuario);
export default router;