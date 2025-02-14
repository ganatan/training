import Person from './person-model.js';

class PersonRepository {
  async getItems() {
    return await Person.findAll({ attributes: ['id', 'name'] });
  }

  async getItemById(id) {
    return await Person.findByPk(id, { attributes: ['id', 'name'] });
  }

  async createItem(person) {
    return await Person.create(person);
  }

  async updateItem(id, updatedData) {
    const person = await Person.findByPk(id);
    if (!person) {
      return null;
    }

    return await person.update(updatedData);
  }

  async deleteItem(id) {
    const person = await Person.findByPk(id);
    if (!person) {
      return null;
    }
    await person.destroy();

    return person;
  }
}

export default PersonRepository;

