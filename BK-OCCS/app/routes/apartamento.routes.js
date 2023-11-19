import express from 'express';
import apartamentosController from '../controllers/apartamentos.controller';

const router = express.Router(); 

// Crear nuestras rutas
router.get('/', apartamentosController.Listar);
router.get('/:id', apartamentosController.BuscarUno);
router.post('/', apartamentosController.CrearApartamento);
router.put('/:id', apartamentosController.ActualizarApartamento);
router.delete('/:id', apartamentosController.EliminarApartamento);

export default router;