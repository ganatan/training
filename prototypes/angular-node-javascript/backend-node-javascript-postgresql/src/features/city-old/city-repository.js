import pool from '../../config/database.js';

class CityRepository {
  constructor(useDatabase) {
    console.log('00000000001:' + useDatabase);
    this.useDatabase = useDatabase;
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

  // async getItems() {
  //   try {
  //     return await new Promise((resolve) => {
  //       setTimeout(() => resolve(this.items), 100);
  //     });
  //   } catch (error) {
  //     console.error(`Error fetching persons: ${error.message}`);
  //     return [];
  //   }
  // }

  async getItems() {
    if (this.useDatabase) {
      try {
        const { rows } = await pool.query('SELECT * FROM city');
        return rows;
      } catch (error) {
        console.error(`Database error: ${error.message}`);
        return [];
      }
    }
    return this.items;
  }

}

export default CityRepository;
