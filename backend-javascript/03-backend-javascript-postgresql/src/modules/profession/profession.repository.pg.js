import pool from '../../config/database.js';

class PgRepository {

  async getItems({ page = 1, size = 40, name = '' } = {}) {
    const offset = (page - 1) * size;
    const filter = `%${name}%`;

    const { rows } = await pool.query(
      `
      SELECT id, name
      FROM profession
      WHERE name ILIKE $1
      ORDER BY id
      LIMIT $2 OFFSET $3
      `,
      [filter, size, offset],
    );

    return rows.map(row => ({
      id: row.id,
      name: row.name,
    }));
  }

  async getItemsCount() {
    const { rows } = await pool.query('SELECT COUNT(*) AS count FROM profession');

    return { count: Number(rows[0].count) };
  }

  async getItemById(id) {
    const { rows } = await pool.query('SELECT * FROM profession WHERE id = $1', [id]);
    if (!rows.length) { return null; }

    const row = rows[0];

    return {
      id: row.id,
      name: row.name,
    };
  }

  async createItem(data) {
    const { name } = data;
    const { rows } = await pool.query('INSERT INTO profession (name) VALUES ($1) RETURNING *', [name]);

    return rows[0];
  }

  async updateItem(id, data) {
    const { name } = data;
    const { rows } = await pool.query('UPDATE profession SET name = $1 WHERE id = $2 RETURNING *', [name, id]);

    return rows.length ? rows[0] : null;
  }

  async deleteItem(id) {
    const { rows } = await pool.query('DELETE FROM profession WHERE id = $1 RETURNING *', [id]);

    return rows.length ? rows[0] : null;
  }
}

export default PgRepository;
