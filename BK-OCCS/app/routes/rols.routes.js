import rolsController from '../controllers/rols.controller.js';
import express from 'express';

const router = express.Router(); 

// Crear nuestras rutas
router.get('/', rolsController.BuscarTodos);
router.get('/:id', rolsController.BuscarUno);
router.post('/', rolsController.CrearContacto);
router.put('/:id', rolsController.ActualizarContacto);
router.delete('/:id', rolsController.EliminarContacto);


export default router;