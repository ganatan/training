import MockRepository from './person.repository.mock.js';
import PgRepository from './person.repository.pg.js';

class Repository {
  constructor(useDatabase) {
    this.repository = useDatabase
      ? new PgRepository()
      : new MockRepository();
  }

  async getItems() {
    return this.repository.getItems();
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
