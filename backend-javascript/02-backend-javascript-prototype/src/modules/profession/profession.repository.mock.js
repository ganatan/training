import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import createItem from './profession.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class MockRepository {
  constructor() {
    this.items = null;
    this.filePath = path.join(__dirname, '../../mocks/profession.mock-data.json');
  }

  async load() {
    if (!this.items) {
      const data = await readFile(this.filePath, 'utf-8');
      this.items = JSON.parse(data);
    }
  }

  async getItems() {
    await this.load();

    return this.items;
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
