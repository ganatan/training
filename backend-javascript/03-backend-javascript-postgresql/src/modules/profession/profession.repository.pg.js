import pool from '../../config/database.js';

class PgRepository {


  async getItems(filters) {
    let result =
    {
      "metadata": {
        "totals": {
          "currentPageTotals": {
            "count": 3,
            "offset": 0,
            "limit": 3
          },
          "globalTotals": {
            "count": 4,
            "totalPages": 2
          }
        },
      },
      "data": [
        {
          "id": 1,
          "name": "Item 1"
        },
        {
          "id": 2,
          "name": "Item 2"
        },
        {
          "id": 3,
          "name": "Item 3"
        },
        {
          "id": 3,
          "name": "Item 3"
        }
      ]
    };

    return result;
  }


  // async getItems({ page = 1, size = 10, name = '' } = {}) {
  //   const offset = (page - 1) * size;
  //   const filter = `%${name}%`;

  //   const dataQuery = `
  //     SELECT id, name
  //     FROM profession
  //     WHERE name ILIKE $1
  //     ORDER BY id
  //     LIMIT $2 OFFSET $3
  //   `;

  //   const countQuery = `
  //     SELECT COUNT(*)::int AS count
  //     FROM profession
  //     WHERE name ILIKE $1
  //   `;

  //   const [dataResult, countResult] = await Promise.all([
  //     pool.query(dataQuery, [filter, size, offset]),
  //     pool.query(countQuery, [filter]),
  //   ]);

  //   const total = countResult.rows[0].count;
  //   const totalPages = Math.ceil(total / size);
  //   const currentPageCount = dataResult.rowCount;

  //   const metadata = {
  //     totals: {
  //       currentPageTotals: {
  //         count: currentPageCount,
  //         offset,
  //         limit: size
  //       },
  //       globalTotals: {
  //         count: total,
  //         totalPages
  //       }
  //     }
  //   };

  //   const data = dataResult.rows.map(row => ({
  //     id: row.id,
  //     name: row.name
  //   }));

  //   return { metadata, data };
  // }

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

  async existsByName(name) {
    const { rows } = await pool.query(
      'SELECT 1 FROM profession WHERE LOWER(name) = LOWER($1) LIMIT 1',
      [name]
    );
    return rows.length > 0;
  }

}

export default PgRepository;
