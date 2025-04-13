import express from 'express';

import Repository from './item.repository.js';
import Service from './item.service.js';
import Controller from './item.controller.js';

import config from '../../core/config/config.js';

const router = express.Router();

const repository = new Repository(config.dbClient);
const service = new Service(repository);
const controller = new Controller(service);

router.get('/', controller.getItems);
router.get('/:id', controller.getItemById);
router.post('/', controller.createItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

export default router;
