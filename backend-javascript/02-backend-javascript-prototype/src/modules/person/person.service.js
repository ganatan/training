// import { validateItem } from './person.validator.js'
import { validatePerson } from './person.schema.js'

class Service {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems() {
    return await this.repository.getItems();
  }

  async getItemById(id) {
    return await this.repository.getItemById(id);
  }

  // async createItem(createdData) {
  //   try {
  //     validateItem(createdData)
  //   } catch (error) {
  //     error.status = 400;
  //     if (!error.message) {
  //       error.message = 'Invalid person data'
  //     }
  //     throw error
  //   }

  //   const exists = await this.repository.existsByName(createdData.name)
  //   if (exists) {
  //     const error = new Error('Person already exists')
  //     error.status = 409
  //     throw error
  //   }

  //   return await this.repository.createItem(createdData)
  // }

  // async updateItem(id, updatedData) {
  //   try {
  //     validatePerson(updatedData)
  //   } catch (error) {
  //     error.status = 400
  //     if (!error.message) {
  //       error.message = 'Invalid person data'
  //     }
  //     throw error
  //   }

  //   return await this.repository.updateItem(id, updatedData)
  // }

  // async createItem(createdData) {
  //   try {
  //     personSchema.parse(createdData)
  //   } catch (error) {
  //     error.status = 400
  //     throw error
  //   }

  //   const exists = await this.repository.existsByName(createdData.name)
  //   if (exists) {
  //     const error = new Error('Person already exists')
  //     error.status = 409
  //     throw error
  //   }

  //   return await this.repository.createItem(createdData)
  // }

  // async createItem(data) {
  //   validatePerson(data)

  //   const exists = await this.repository.existsByName(data.name)
  //   if (exists) {
  //     const error = new Error('Person already exists')
  //     error.status = 409
  //     throw error
  //   }

  //   return await this.repository.createItem(data)
  // }

  async createItem(createdData) {
    try {
      validatePerson(createdData)
    } catch (error) {
      error.status = 400
      throw error
    }

    const exists = await this.repository.existsByName(createdData.name)
    if (exists) {
      const error = new Error('Person already exists')
      error.status = 409
      throw error
    }

    return await this.repository.createItem(createdData)
  }

  async updateItem(id, updatedData) {
    try {
      personSchema.parse(updatedData)
    } catch (error) {
      error.status = 400
      throw error
    }

    return await this.repository.updateItem(id, updatedData)
  }

  async deleteItem(id) {
    return await this.repository.deleteItem(id);
  }
}

export default Service;
