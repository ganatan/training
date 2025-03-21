import pool from '../../config/database.js';

class PgRepository {
  async getItems() {
    const { rows } = await pool.query('SELECT * FROM city');

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
    }));
  }

  async getItemById(id) {
    const { rows } = await pool.query('SELECT * FROM city WHERE id = $1', [id]);
    if (!rows.length) { return null; }

    const row = rows[0];

    return {
      id: row.id,
      name: row.name,
    };
  }

  async createItem(data) {
    const { name } = data;
    const { rows } = await pool.query('INSERT INTO city (name) VALUES ($1) RETURNING *', [name]);

    return rows[0];
  }

  async updateItem(id, data) {
    const { name } = data;
    const { rows } = await pool.query('UPDATE city SET name = $1 WHERE id = $2 RETURNING *', [name, id]);

    return rows.length ? rows[0] : null;
  }

  async deleteItem(id) {
    const { rows } = await pool.query('DELETE FROM city WHERE id = $1 RETURNING *', [id]);

    return rows.length ? rows[0] : null;
  }
}

export default PgRepository;
