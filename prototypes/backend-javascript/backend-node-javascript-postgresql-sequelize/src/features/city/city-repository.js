import City from './city-model.js';

class CityRepository {
  async getItems() {
    return await City.findAll({ attributes: ['id', 'name'] });
  }

  async getItemById(id) {
    return await City.findByPk(id, { attributes: ['id', 'name'] });
  }

  async createItem(city) {
    return await City.create(city);
  }

  async updateItem(id, updatedData) {
    const city = await City.findByPk(id);

    if (!city) {
      return null;
    }

    return await city.update(updatedData);
  }

  async deleteItem(id) {
    const city = await City.findByPk(id);

    if (!city) {
      return null;
    }

    await city.destroy();

    return city;
  }
}

export default CityRepository;
