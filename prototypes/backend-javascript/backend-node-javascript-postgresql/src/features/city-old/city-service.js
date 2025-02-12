class CityService {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems() {
    return this.repository.getItems();
  }
}

export default CityService;
