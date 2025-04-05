import { HTTP_STATUS } from '../../shared/constants/http-status.js';
import { ITEM_CONSTANTS } from './item.constant.js';
import { validateItem } from './item.schema.js';

class Controller {
  constructor(service) {
    this.service = service;
    this.getItems = this.getItems.bind(this);
    this.getItemById = this.getItemById.bind(this);
    this.createItem = this.createItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async getItems(req, res, next) {
    try {
      const result = await this.service.getItems(req.query);

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async getItemById(req, res, next) {
    try {
      const result = await this.service.getItemById(parseInt(req.params.id));

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next({ status: HTTP_STATUS.NOT_FOUND, message: error.message });
      }

      return next(error);
    }
  }

  async createItem(req, res, next) {
    try {
      validateItem(req.body);

      const result = await this.service.createItem(req.body);

      return res.status(HTTP_STATUS.CREATED).json(result);
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.ALREADY_EXISTS) {
        return next({ status: HTTP_STATUS.CONFLICT, message: error.message });
      }
      if (error.name === 'ValidationError') {
        return next({ status: HTTP_STATUS.BAD_REQUEST, message: error.message });
      }

      return next(error);
    }
  }

  async updateItem(req, res, next) {
    try {
      validateItem(req.body);

      const result = await this.service.updateItem(parseInt(req.params.id), req.body);

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next({ status: HTTP_STATUS.NOT_FOUND, message: error.message });
      }
      if (error.name === 'ValidationError') {
        return next({ status: HTTP_STATUS.BAD_REQUEST, message: error.message });
      }

      return next(error);
    }
  }

  async deleteItem(req, res, next) {
    try {
      const result = await this.service.deleteItem(parseInt(req.params.id));

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next({ status: HTTP_STATUS.NOT_FOUND, message: error.message });
      }

      return next(error);
    }
  }
}

export default Controller;

