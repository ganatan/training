class CityRepository {
  constructor() {
    this.items = [
      'Cincinnati',
      'New York',
      'Knoxville',
      'London',
      'Detroit',
      'Kapuskasing',
      'Denver',
      'Burbank',
      'San Francisco',
      'Houston',
      'Atlanta',
      'Modesto'
    ];
  }

  async getItems() {
    return this.items;
  }

  async getItemById(id) {
    return this.items.find((item) => item.id === id) || null;
  }

  async createItem(person) {
    const newPerson = { id: this.items.length + 1, ...person };
    this.items.push(newPerson);
    return newPerson;
  }

  async updateItem(id, updatedData) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    this.items[index] = { ...this.items[index], ...updatedData };
    return this.items[index];
  }

  async deleteItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    return this.items.splice(index, 1)[0];
  }
}

export default CityRepository;
