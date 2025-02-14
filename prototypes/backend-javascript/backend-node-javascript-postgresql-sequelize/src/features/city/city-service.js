class CityService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems() {
    return await this.repository.getItems();
  }

  async getItemById(id) {
    return await this.repository.getItemById(id);
  }

  async createItem(city) {
    return await this.repository.createItem(city);
  }

  async updateItem(id, updatedData) {
    return await this.repository.updateItem(id, updatedData);
  }

  async deleteItem(id) {
    return await this.repository.deleteItem(id);
  }
}

export default CityService;
