class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems(query) {
    return this.repository.findAll(query);
  }

  async getItemById(id) {
    return this.repository.findOne(id);
  }

  async createItem(data) {
    return this.repository.create(data);
  }

  async updateItem(id, data) {
    return this.repository.update(id, data);
  }

  async deleteItem(id) {
    return this.repository.delete(id);
  }
}

export default BaseService;
