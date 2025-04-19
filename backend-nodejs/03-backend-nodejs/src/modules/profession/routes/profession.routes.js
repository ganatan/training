import express from 'express';
import config from '../../../core/config/config.js';

import Repository from '../repositories/profession.repository.js';
import Service from '../services/profession.service.js';
import Controller from '../controllers/profession.controller.js';

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


// import express from 'express';
// import config from '../../../core/config/config.js';

// // import permissionHandler from '../../../infrastructure/middleware/security/permission-handler.js';

// // import Repository from '../repositories/profession.repository.js';
// // import CommandService from '../services/profession.command.service.js';
// // import QueryService from '../services/profession.query.service.js';
// // import Controller from '../controllers/profession.controller.js';

// import Repository from '../repositories/profession.repository.js';
// import Service from '../services/profession.service.js';
// import Controller from '../controllers/profession.controller.js';

// const router = express.Router();

// // const repository = new Repository(config.dbClient);

// // const commandService = new CommandService(repository);
// // const queryService = new QueryService(repository);

// // const controller = new Controller({
// //   commandService,
// //   queryService,
// // });

// const repository = new Repository(config.dbClient);
// const service = new Service(repository);
// const controller = new Controller(service);

// // const admin = permissionHandler(['admin']);
// // const editor = permissionHandler(['admin', 'editor']);

// // router.get('/', editor, controller.getItems);
// // router.get('/:id', editor, controller.getItemById);
// // router.post('/', admin, controller.createItem);
// // router.put('/:id', admin, controller.updateItem);
// // router.delete('/:id', admin, controller.deleteItem);

// router.get('/', controller.getItems);
// router.get('/:id', controller.getItemById);
// router.post('/', controller.createItem);
// router.put('/:id', controller.updateItem);
// router.delete('/:id', controller.deleteItem);

// export default router;
