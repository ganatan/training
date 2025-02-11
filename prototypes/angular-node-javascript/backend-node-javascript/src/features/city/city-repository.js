class CityRepository {
  constructor() {
    this.items =
    [
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
    try {
      return await new Promise((resolve) => {
        setTimeout(() => resolve(this.items), 100);
      });
    } catch (error) {
      console.error(`Error fetching persons: ${error.message}`);
      return [];
    }
  }
}

export default CityRepository;
