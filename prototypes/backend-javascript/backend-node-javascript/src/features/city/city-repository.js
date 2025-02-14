class CityRepository {
  constructor() {
    this.items = [
      { id: 1, name: 'Cincinnati' },
      { id: 2, name: 'New York' },
      { id: 3, name: 'Knoxville' },
      { id: 4, name: 'London' },
      { id: 5, name: 'Detroit' },
      { id: 6, name: 'Kapuskasing' },
      { id: 7, name: 'Denver' },
      { id: 8, name: 'Burbank' },
      { id: 9, name: 'San Francisco' },
      { id: 10, name: 'Houston' },
      { id: 11, name: 'Atlanta' },
      { id: 12, name: 'Modesto' },
    ];
  }

  async getItems() {
    return Promise.resolve(this.items);
  }

  async getItemById(id) {
    return Promise.resolve(this.items.find((item) => item.id === id) || null);
  }

  async createItem(city) {
    const newCity = { id: this.items.length + 1, ...city };
    this.items.push(newCity);

    return Promise.resolve(newCity);
  }

  async updateItem(id, updatedData) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }
    this.items[index] = { ...this.items[index], ...updatedData };

    return Promise.resolve(this.items[index]);
  }

  async deleteItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }

    return Promise.resolve(this.items.splice(index, 1)[0]);
  }
}

export default CityRepository;
