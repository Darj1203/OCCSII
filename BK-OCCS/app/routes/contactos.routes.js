import contactosController from '../controllers/contactos.controller.js';
import express from 'express';

const router = express.Router(); 

// Crear nuestras rutas
router.get('/', apartamentosController.BuscarTodos);
router.get('/:id', apartamentosController.BuscarUno);
router.post('/', apartamentosController.CrearContacto);
router.put('/:id', apartamentosController.ActualizarContacto);
router.delete('/:id', apartamentosController.EliminarContacto);


export default router;