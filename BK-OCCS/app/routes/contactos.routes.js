import contactosController from '../controllers/contactos.controller.js';
import express from 'express';

const router = express.Router(); 

// Crear nuestras rutas
router.get('/', contactosController.BuscarTodos);
router.get('/:id', contactosController.BuscarUno);
router.post('/', contactosController.CrearContacto);
router.put('/:id', contactosController.ActualizarContacto);
router.delete('/:id', contactosController.EliminarContacto);


export default router;