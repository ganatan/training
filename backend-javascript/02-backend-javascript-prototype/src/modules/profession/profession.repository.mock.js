import { ITEMS_MOCK_DATA } from '../../mocks/profession/profession.mock-data.js';
import createItem from './profession.model.js';

class MockRepository {
  constructor() {
    this.items = JSON.parse(JSON.stringify(ITEMS_MOCK_DATA));
  }

  async getItems({ offset = 0, limit = 10 } = {}) {
    const total = this.items.length;
    const totalPages = Math.ceil(total / limit);
    const data = this.items.slice(offset, offset + limit);

    const metadata = {
      totals: {
        currentPageTotals: {
          count: data.length,
          offset: offset,
          limit: limit,
        },
        globalTotals: {
          count: total,
          totalPages: totalPages,
        },
      },
    };

    return { metadata, data };
  }

  async getItemsCount() {
    return { count: this.items.length };
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
