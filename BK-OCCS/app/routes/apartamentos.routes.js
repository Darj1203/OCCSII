import apartamentosController from '../controllers/apartamentos.controller.js';
import Router from 'express';

const apartamentosRouter = Router(); 

// Crear nuestras rutas
apartamentosRouter.get('/', apartamentosController.Listar);
apartamentosRouter.get('/:id', apartamentosController.BuscarUno);
apartamentosRouter.post('/', apartamentosController.CrearApartamento);
apartamentosRouter.delete('/:id', apartamentosController.EliminarApartamento);

export default apartamentosRouter;