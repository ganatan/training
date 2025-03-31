import MockRepository from './item.repository.mock.js';

class Repository {
  constructor(useDatabase) {
    this.repository = useDatabase
      ? new MockRepository()
      : new MockRepository();
  }

  async getItems(query) {
    return this.repository.getItems(query);
  }

  async getItemById(id) {
    return this.repository.getItemById(id);
  }

  async createItem(data) {
    return this.repository.createItem(data);
  }

  async updateItem(id, data) {
    return this.repository.updateItem(id, data);
  }

  async deleteItem(id) {
    return this.repository.deleteItem(id);
  }

  async existsByName(name) {
    return await this.repository.existsByName(name);
  }
}

export default Repository;
