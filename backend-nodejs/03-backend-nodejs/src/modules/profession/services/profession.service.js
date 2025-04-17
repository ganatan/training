import ProfessionEntity from '../entities/profession.entity.js';
import { ITEM_CONSTANTS } from '../constants/profession.constant.js';

class Service {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems(query) {
    const result = await this.repository.getItems(query);
    result.data = result.data.map(item => new ProfessionEntity(item));
    return result;
  }

  async getItemById(id) {
    const item = await this.repository.getItemById(id);
    if (!item) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }

    return new ProfessionEntity(item);
  }

  async createItem(data) {
    const exists = await this.repository.existsByName(data.name);
    if (exists) {
      throw new Error(ITEM_CONSTANTS.ALREADY_EXISTS);
    }

    const profession = new ProfessionEntity(data);
    const created = await this.repository.createItem(profession.toJSON());

    return new ProfessionEntity(created);
  }

  async updateItem(id, data) {
    const profession = new ProfessionEntity({ id, ...data });
    const updated = await this.repository.updateItem(id, profession.toJSON());
    if (!updated) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }

    return new ProfessionEntity(updated);
  }

  async deleteItem(id) {
    const deleted = await this.repository.deleteItem(id);
    if (!deleted) {
      throw new Error(ITEM_CONSTANTS.NOT_FOUND);
    }

    return new ProfessionEntity(deleted);
  }
}

export default Service;


// import { ITEM_CONSTANTS } from '../constants/profession.constant.js';

// class Service {
//   constructor(repository) {
//     this.repository = repository;
//   }

//   async getItems(query) {
//     return await this.repository.getItems(query);
//   }

//   async getItemById(id) {
//     const item = await this.repository.getItemById(id);

//     if (!item) {
//       throw new Error(ITEM_CONSTANTS.NOT_FOUND);
//     }

//     return item;
//   }

//   async createItem(data) {
//     const exists = await this.repository.existsByName(data.name);
//     if (exists) {
//       throw new Error(ITEM_CONSTANTS.ALREADY_EXISTS);
//     }

//     return await this.repository.createItem(data);
//   }

//   async updateItem(id, data) {
//     const updated = await this.repository.updateItem(id, data);
//     if (!updated) {
//       throw new Error(ITEM_CONSTANTS.NOT_FOUND);
//     }

//     return updated;
//   }

//   async deleteItem(id) {
//     const deleted = await this.repository.deleteItem(id);
//     if (!deleted) {
//       throw new Error(ITEM_CONSTANTS.NOT_FOUND);
//     }

//     return deleted;
//   }
// }

// export default Service;
