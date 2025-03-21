import PersonPgRepository from './person-repository-pg.js';
import PersonMockRepository from './person-repository-mock.js';

class PersonRepository {
  constructor(useDatabase) {
    this.repository = useDatabase
      ? new PersonPgRepository()
      : new PersonMockRepository();
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
}

export default PersonRepository;
