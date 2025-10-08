import { validateItem } from './city.schema.js';
import service from './city.service.js';

class Controller {
  async getItems(req, res, next) {
    try {
      const items = service.getItems();
      res.locals = {
        data: items,
        statusCode: 200,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async createItem(req, res, next) {
    try {
      validateItem(req.body);
      const newItem = service.create(req.body);
      res.locals = {
        data: newItem,
        statusCode: 201,
      };

      return next();
    } catch (error) {
      if (error.message === 'Item already exists') {
        return next({ statusCode: 409, message: error.message });
      }
      if (error.name === 'ValidationError') {
        return next({ statusCode: 400, message: error.message });
      }

      return next(error);
    }
  }
}

export default new Controller();
