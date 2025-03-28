import { ITEMS_MOCK_DATA } from '../../mocks/profession.mock-data.js';
import { DEFAULT_ITEMS_PER_PAGE } from '../../shared/constants/pagination.constants.js';

import createItem from './item.model.js';

class MockRepository {
  constructor() {
    this.items = JSON.parse(JSON.stringify(ITEMS_MOCK_DATA));
  }

  async getItems({ offset = 0, limit = DEFAULT_ITEMS_PER_PAGE } = {}) {
    const totalItems = this.items.length;
    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.floor(offset / limit) + 1;
    const data = this.items.slice(offset, offset + limit);

    const metadata = {
      pagination: {
        currentPage: currentPage,
        perPage: limit,
        totalItems: totalItems,
        totalPages: totalPages,
      },
    };

    return { metadata, data };
  }

  async getItemById(id) {
    return this.items.find((item) => item.id === id) || null;
  }

  async createItem(data) {
    const newItem = createItem({ id: this.items.length + 1, ...data });
    this.items.push(newItem);

    return newItem;
  }

  async updateItem(id, data) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) { return null; }
    this.items[index] = { ...this.items[index], ...data };

    return this.items[index];
  }

  async deleteItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) { return null; }

    return this.items.splice(index, 1)[0];
  }

  async existsByName(name) {
    return this.items.some(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
  }
}

export default MockRepository;
