import pool from '../../config/database.js';

class CityRepository {
  constructor(useDatabase) {
    this.useDatabase = useDatabase;
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
      'Modesto',
    ];
  }

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

  async getItemById(id) {
    if (this.useDatabase) {
      try {
        const { rows } = await pool.query('SELECT * FROM city WHERE id = $1', [id]);

        return rows.length ? rows[0] : null;
      } catch (error) {
        console.error(`Database error: ${error.message}`);

        return null;
      }
    }

    return this.items.find((item) => item.id === id) || null;
  }

  async createItem(item) {
    if (this.useDatabase) {
      try {
        const { name } = item;
        const { rows } = await pool.query(
          'INSERT INTO city (name) VALUES ($1) RETURNING *',
          [name]
        );

        return rows[0];
      } catch (error) {
        console.error(`Database error: ${error.message}`);

        return null;
      }
    }
    const newItem = { id: this.items.length + 1, ...item };
    this.items.push(newItem);

    return newItem;
  }

  async updateItem(id, updatedData) {
    if (this.useDatabase) {
      try {
        const { name } = updatedData;
        const { rows } = await pool.query(
          'UPDATE city SET name = $1 WHERE id = $2 RETURNING *',
          [name, id]
        );

        return rows.length ? rows[0] : null;
      } catch (error) {
        console.error(`Database error: ${error.message}`);

        return null;
      }
    }
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    this.items[index] = { ...this.items[index], ...updatedData };

    return this.items[index];
  }

  async deleteItem(id) {
    if (this.useDatabase) {
      try {
        const { rows } = await pool.query('DELETE FROM city WHERE id = $1 RETURNING *', [id]);
        return rows.length ? rows[0] : null;
      } catch (error) {
        console.error(`Database error: ${error.message}`);
        return null;
      }
    }
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    return this.items.splice(index, 1)[0];
  }

}

export default CityRepository;
