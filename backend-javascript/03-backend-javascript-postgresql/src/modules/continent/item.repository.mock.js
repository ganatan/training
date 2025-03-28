import { ITEMS_MOCK_DATA } from '../../mocks/continent.mock-data.js';
import createItem from './item.model.js';

class MockRepository {
  constructor() {
    this.items = JSON.parse(JSON.stringify(ITEMS_MOCK_DATA));
  }

  // async getItems({ offset = 0, limit = 10 } = {}) {
  //   const totalItems = this.items.length;
  //   const totalPages = Math.ceil(totalItems / limit);
  //   const currentPage = Math.floor(offset / limit) + 1;
  //   const data = this.items.slice(offset, offset + limit);

  //   const metadata = {
  //     pagination: {
  //       currentPage: currentPage,
  //       perPage: limit,
  //       totalItems: totalItems,
  //       totalPages: totalPages,
  //     },
  //   };

  //   return { metadata, data };
  // }

  async getItems(filters = {}) {
    const {
      page = 1,
      size = 10,
      sort = '-name',
      name = '',
      code = '',
      areaMin = null,
      areaMax = null,
      populationMin = null,
      populationMax = null,
      countriesNumberMin = null,
      countriesNumberMax = null,
      densityMin = null,
      densityMax = null,
    } = filters;

    const currentPage = Math.max(1, parseInt(page, 10));
    const perPage = Math.max(1, parseInt(size, 10));
    const offset = (currentPage - 1) * perPage;

    let filteredItems = [...this.items];

    if (name) {
      filteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (code) {
      filteredItems = filteredItems.filter(item =>
        item.code.toLowerCase().includes(code.toLowerCase())
      );
    }

    if (areaMin !== null) {
      filteredItems = filteredItems.filter(item => parseFloat(item.area) >= parseFloat(areaMin));
    }
    if (areaMax !== null) {
      filteredItems = filteredItems.filter(item => parseFloat(item.area) <= parseFloat(areaMax));
    }

    if (populationMin !== null) {
      filteredItems = filteredItems.filter(item => parseFloat(item.population) >= parseFloat(populationMin));
    }
    if (populationMax !== null) {
      filteredItems = filteredItems.filter(item => parseFloat(item.population) <= parseFloat(populationMax));
    }

    if (countriesNumberMin !== null) {
      filteredItems = filteredItems.filter(item => parseInt(item.countriesNumber) >= parseInt(countriesNumberMin));
    }
    if (countriesNumberMax !== null) {
      filteredItems = filteredItems.filter(item => parseInt(item.countriesNumber) <= parseInt(countriesNumberMax));
    }

    if (densityMin !== null) {
      filteredItems = filteredItems.filter(item => parseFloat(item.density) >= parseFloat(densityMin));
    }
    if (densityMax !== null) {
      filteredItems = filteredItems.filter(item => parseFloat(item.density) <= parseFloat(densityMax));
    }

    const sortField = sort.replace(/^-/, '');
    const sortOrder = sort.startsWith('-') ? -1 : 1;

    filteredItems.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (aVal < bVal) return -1 * sortOrder;
      if (aVal > bVal) return 1 * sortOrder;
      return 0;
    });

    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / perPage);
    const data = filteredItems.slice(offset, offset + perPage);

    const global = this.computeTotals(filteredItems);
    const current = this.computeTotals(data);

    return {
      metadata: {
        pagination: {
          currentPage,
          perPage,
          totalItems,
          totalPages,
        },
      },
      totals: {
        global,
        currentPage: current,
      },
      data,
    };
  }

  computeTotals(rows) {
    let area = 0;
    let population = 0;
    let countriesNumber = 0;
    let count = 0;

    for (const item of rows) {
      count += 1;
      area += parseFloat(item.area || 0);
      population += parseFloat(item.population || 0);
      countriesNumber += parseInt(item.countriesNumber || 0);
    }

    const density = area > 0 ? parseFloat((population / area).toFixed(5)) : 0;

    return {
      count,
      area,
      population,
      countriesNumber,
      density,
    };
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
