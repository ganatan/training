import express from 'express';

import responseHandler from '../../middlewares/response-handler.js';

import Repository from './profession.repository.js';
import Service from './profession.service.js';
import Controller from './profession.controller.js';

import config from '../../core/config/config.js';

const router = express.Router();

const repository = new Repository(config.useDatabase);
const service = new Service(repository);
const controller = new Controller(service);

router.get('/', controller.getItems, responseHandler);
router.get('/count', controller.getItemsCount, responseHandler);
router.get('/paginated', controller.getItemsPaginated, responseHandler);
router.get('/:id', controller.getItemById, responseHandler);
router.post('/', controller.createItem, responseHandler);
router.put('/:id', controller.updateItem, responseHandler);
router.delete('/:id', controller.deleteItem, responseHandler);

export default router;
