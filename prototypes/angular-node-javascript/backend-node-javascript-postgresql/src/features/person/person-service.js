class PersonService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems() {
    return this.repository.getItems();
  }

  async getItemById(id) {
    return this.repository.getItemById(id);
  }

  async createItem(person) {
    return this.repository.createItem(person);
  }

  async updateItem(id, updatedData) {
    return this.repository.updateItem(id, updatedData);
  }

  async deleteItem(id) {
    return this.repository.deleteItem(id);
  }
}

export default PersonService;
