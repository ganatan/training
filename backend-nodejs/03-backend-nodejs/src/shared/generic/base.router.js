const express = require('express');

function createBaseRouter(controller) {
  const router = express.Router();
  router.get('/', controller.getItems);
  router.get('/:id', controller.getItem);
  router.post('/', controller.createItem);
  router.put('/:id', controller.updateItem);
  router.delete('/:id', controller.deleteItem);

  return router;
}

module.exports = createBaseRouter;
