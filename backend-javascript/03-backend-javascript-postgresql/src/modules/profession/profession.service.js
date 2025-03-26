import { HTTP_STATUS } from '../../shared/constants/http.js';

const MESSAGES = {
  ITEM_ALREADY_EXISTS: 'Profession already exists',
};

import { validateItem } from './profession.schema.js';

class Service {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems(query) {
    return await this.repository.getItems(query);
  }

  async getItemsCount() {
    return await this.repository.getItemsCount();
  }

  async getItemsPaginated({ page, size, name }) {
    const [items, total] = await Promise.all([
      this.repository.getItems({ page, size, name }),
      this.repository.getItemsCount(name),
    ]);

    return { items, total };
  }

  async getItemById(id) {
    return await this.repository.getItemById(id);
  }

  async createItem(createdData) {
    try {
      validateItem(createdData);
    } catch (error) {
      error.status = HTTP_STATUS.BAD_REQUEST;
      throw error;
    }

    const exists = await this.repository.existsByName(createdData.name);
    if (exists) {
      const error = new Error(MESSAGES.ITEM_ALREADY_EXISTS);
      error.status = HTTP_STATUS.CONFLICT;
      throw error;
    }

    return await this.repository.createItem(createdData);
  }

  async updateItem(id, updatedData) {
    try {
      validateItem(updatedData);
    } catch (error) {
      error.status = HTTP_STATUS.BAD_REQUEST;
      throw error;
    }

    return await this.repository.updateItem(id, updatedData);
  }

  async deleteItem(id) {
    return await this.repository.deleteItem(id);
  }
}

export default Service;
