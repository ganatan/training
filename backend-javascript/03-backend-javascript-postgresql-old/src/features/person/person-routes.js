import express from 'express';

import responseHandler from '../../middleware/response-handler.js';

import PersonRepository from './person-repository.js';
import PersonService from './person-service.js';
import PersonController from './person-controller.js';

import config from '../../config/config.js';

const router = express.Router();

const repository = new PersonRepository(config.useDatabase);
const service = new PersonService(repository);
const controller = new PersonController(service);

router.get('/', controller.getItems, responseHandler);
router.get('/:id', controller.getItemById, responseHandler);
router.post('/', controller.createItem, responseHandler);
router.put('/:id', controller.updateItem, responseHandler);
router.delete('/:id', controller.deleteItem, responseHandler);

export default router;
