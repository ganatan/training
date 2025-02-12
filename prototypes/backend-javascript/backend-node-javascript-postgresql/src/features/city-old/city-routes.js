import express from 'express';
import CityController from './city-controller.js';
import CityService from './city-service.js';
import CityRepository from './city-repository.js';

const router = express.Router();

const repository = new CityRepository(true);
const service = new CityService(repository);
const controller = new CityController(service);

router.get('/', controller.getItems);

export default router;
