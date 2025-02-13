class CityController {
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
      res.locals.data = await this.service.getItems(req.query);

      return next();
    } catch (error) {

      return next(error);
    }
  }

  async getItemById(req, res, next) {
    try {
      const item = await this.service.getItemById(parseInt(req.params.id));
      if (!item) {
        return next({ status: 404, message: 'Person not found' });
      }
      res.locals.data = item;

      return next();
    } catch (error) {

      return next(error);
    }
  }

  async createItem(req, res, next) {
    try {
      res.locals.data = await this.service.createItem(req.body);
      res.status(201);

      return next();
    } catch (error) {

      return next(error);
    }
  }

  async updateItem(req, res, next) {
    console.log('00000000001:updateItem');
    try {
      const updatedItem = await this.service.updateItem(parseInt(req.params.id), req.body);
      if (!updatedItem) {
        return next({ status: 404, message: 'Person not found' });
      }
      res.locals.data = updatedItem;

      return next();
    } catch (error) {

      return next(error);
    }
  }

  async deleteItem(req, res, next) {
    try {
      const deletedItem = await this.service.deleteItem(parseInt(req.params.id));
      if (!deletedItem) {
        return next({ status: 404, message: 'Person not found' });
      }
      res.locals.data = deletedItem;

      return next();
    } catch (error) {

      return next(error);
    }
  }
}

export default CityController;
