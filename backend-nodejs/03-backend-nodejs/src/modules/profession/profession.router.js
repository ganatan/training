import express from 'express';

import config from '../../core/config/config.js';

import Repository from './profession.repository.js';
import Service from './profession.service.js';
import Controller from './profession.controller.js';

import permissionHandler from '../../infrastructure/middleware/permission-handler.js';
import fakeAuth from '../../infrastructure/middleware/fake-auth.js';

const router = express.Router();

const repository = new Repository(config.dbClient);
const service = new Service(repository);
const controller = new Controller(service);

router.use(fakeAuth({ id: 2, username: 'editor_user', role: 'editor1' }));

router.get('/', permissionHandler(['admin', 'editor']), controller.getItems);
router.post('/', permissionHandler(['admin']), controller.createItem);
router.put('/:id', permissionHandler(['admin']), controller.updateItem);
router.delete('/:id', permissionHandler(['admin']), controller.deleteItem);

export default router;
