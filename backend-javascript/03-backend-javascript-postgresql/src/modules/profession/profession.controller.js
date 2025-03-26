import { HTTP_STATUS } from '../../shared/constants/http.js';

const MESSAGES = {
  ITEM_NOT_FOUND: 'Profession not found',
};

class Controller {
  constructor(service) {
    this.service = service;

    this.getItems = this.getItems.bind(this);
    this.getItemsCount = this.getItemsCount.bind(this);
    this.getItemsPaginated = this.getItemsPaginated.bind(this);
    this.getItemById = this.getItemById.bind(this);
    this.createItem = this.createItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async getItems(req, res, next) {
    try {
      console.log('00000000001:' + JSON.stringify(req.query));
      const result = await this.service.getItems(req.query);

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {

      return next(error);
    }
  }

  async getItemsCount(req, res, next) {
    try {
      const result = await this.service.getItemsCount(req.query);

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {

      return next(error);
    }
  }

  async getItemsPaginated(req, res, next) {
    try {
      const result = await this.service.getItemsPaginated(req.query);

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {

      return next(error);
    }
  }

  async getItemById(req, res, next) {
    try {
      const result = await this.service.getItemById(parseInt(req.params.id));
      if (!result) {
        return next({ status: HTTP_STATUS.NOT_FOUND, message: MESSAGES.ITEM_NOT_FOUND });
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
      const result = await this.service.updateItem(parseInt(req.params.id), req.body);
      if (!result) {
        return next({ status: HTTP_STATUS.NOT_FOUND, message: MESSAGES.ITEM_NOT_FOUND });
      }

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {

      return next(error);
    }
  }

  async deleteItem(req, res, next) {
    try {
      const result = await this.service.deleteItem(parseInt(req.params.id));
      if (!result) {
        return next({ status: HTTP_STATUS.NOT_FOUND, message: MESSAGES.ITEM_NOT_FOUND });
      }

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {

      return next(error);
    }
  }
}

export default Controller;
