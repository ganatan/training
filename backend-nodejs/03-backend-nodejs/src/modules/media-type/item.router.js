import express from 'express';
import config from '../../core/config/config.js';
import responseHandler from '../../infrastructure/logger/response-handler.js';

import Repository from './item.repository.js';

import BaseController from '../../shared/generic/base.controller.js';
import BaseService from '../../shared/generic/base.service.js';

import { ITEM_CONSTANTS } from './item.constant.js';

const router = express.Router();

const repository = new Repository(config.useDatabase);
const service = new BaseService(repository);
const controller = new BaseController(service, ITEM_CONSTANTS);

router.get('/', controller.getItems, responseHandler);
router.get('/:id', controller.getItemById, responseHandler);
router.post('/', controller.createItem, responseHandler);
router.put('/:id', controller.updateItem, responseHandler);
router.delete('/:id', controller.deleteItem, responseHandler);

export default router;
