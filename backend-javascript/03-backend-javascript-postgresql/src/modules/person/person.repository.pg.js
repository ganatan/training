import pool from '../../core/database/database.js';

class PgRepository {
  async getItems() {
    const { rows } = await pool.query('SELECT * FROM person');

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      wikipediaLink: row.wikipedia_link,
      birthDate: row.birth_date?.toISOString().split('T')[0] || null,
      birthCityId: row.birth_city_id,
      deathDate: row.death_date?.toISOString().split('T')[0] || null,
      deathCityId: row.death_city_id,
      genderId: row.gender_id,
      image: row.image || null,
    }));
  }

  async getItemById(id) {
    const { rows } = await pool.query('SELECT * FROM person WHERE id = $1', [id]);
    if (!rows.length) { return null; }

    const row = rows[0];

    return {
      id: row.id,
      name: row.name,
      wikipediaLink: row.wikipedia_link,
      birthDate: row.birth_date?.toISOString().split('T')[0] || null,
      birthCityId: row.birth_city_id,
      deathDate: row.death_date?.toISOString().split('T')[0] || null,
      deathCityId: row.death_city_id,
      genderId: row.gender_id,
      image: row.image || null,
    };
  }

  async createItem(data) {
    const { name } = data;
    const { rows } = await pool.query('INSERT INTO person (name) VALUES ($1) RETURNING *', [name]);

    return rows[0];
  }

  async updateItem(id, data) {
    const { name } = data;
    const { rows } = await pool.query('UPDATE person SET name = $1 WHERE id = $2 RETURNING *', [name, id]);

    return rows.length ? rows[0] : null;
  }

  async deleteItem(id) {
    const { rows } = await pool.query('DELETE FROM person WHERE id = $1 RETURNING *', [id]);

    return rows.length ? rows[0] : null;
  }
}

export default PgRepository;
