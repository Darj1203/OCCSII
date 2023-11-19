import apartamentosController from '../controllers/apartamentos.controller.js';
import express from 'express';

const router = express.Router(); 

// Crear nuestras rutas
router.get('/', apartamentosController.BuscarTodos);
router.get('/:id', apartamentosController.BuscarUno);
router.post('/', apartamentosController.CrearApartamento);
router.put('/:id', apartamentosController.ActualizarApartamento);
router.delete('/:id', apartamentosController.EliminarApartamento);


export default router;