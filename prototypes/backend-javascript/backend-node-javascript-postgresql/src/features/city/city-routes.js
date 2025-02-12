import express from 'express';
import CityController from './city-controller.js';
import CityService from './city-service.js';
import CityRepository from './city-repository.js';

const router = express.Router();
const repository = new CityRepository();
const service = new CityService(repository);
const controller = new CityController(service);

router.get('/', controller.getItems);
router.get('/:id', controller.getItemById);
router.post('/', controller.createItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

export default router;
