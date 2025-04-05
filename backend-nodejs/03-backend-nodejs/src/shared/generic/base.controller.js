import { HTTP_STATUS } from '../constants/http-status.js';

class BaseController {
  constructor(service, constants = {}) {
    this.service = service;
    this.constants = constants;

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
      const id = parseInt(req.params.id);
      const result = await this.service.getItemById(id);

      if (!result) {
        return next({
          status: HTTP_STATUS.NOT_FOUND,
          message: this.constants.ITEM_NOT_FOUND || 'Item not found',
        });
      }

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async createItem(req, res, next) {
    try {
      const result = await this.service.createItem(req.body);

      return res.status(HTTP_STATUS.CREATED).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async updateItem(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.updateItem(id, req.body);

      if (!result) {
        return next({
          status: HTTP_STATUS.NOT_FOUND,
          message: this.constants.ITEM_NOT_FOUND || 'Item not found',
        });
      }

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async deleteItem(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.deleteItem(id);

      if (!result) {
        return next({
          status: HTTP_STATUS.NOT_FOUND,
          message: this.constants.ITEM_NOT_FOUND || 'Item not found',
        });
      }

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      return next(error);
    }
  }
}

export default BaseController;
