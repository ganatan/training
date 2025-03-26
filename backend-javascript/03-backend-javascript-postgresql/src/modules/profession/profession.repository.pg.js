import pool from '../../core/database/database.js';

import { addFilterCondition, adaptSortField } from '../../shared/utils/query/query-utils.js';

const ITEM_NAME = 'profession';
const ITEMS_NAME = 'profession';
const TABLE_NAME = 'profession';
const ITEM_KEY = 'profession';

class PgRepository {

  async getItems(filters) {
    try {
      const {
        page_number = 1,
        page_size = 10,
        sort = '-name',
        name = '',
      } = filters;
  
      const validPage = page_number > 0 ? parseInt(page_number, 10) : 1;
      const validSize = page_size > 0 ? parseInt(page_size, 10) : 10;
      const offset = (validPage - 1) * validSize;
  
      let filterConditions = 'WHERE (1 = 1) AND (id >= 1000)';
      const params = [];
  
      filterConditions = addFilterCondition(filterConditions, params, 'name', name);
  
      const sortMapping = {
        creationDate: 'creation_date',
        releaseDate: 'release_date',
      };
      let sortBy = adaptSortField(sort, sortMapping);
      let sortOrder = 'ASC';
      if (sort.startsWith('-')) {
        sortOrder = 'DESC';
        sortBy = sortBy.substring(1);
      }
  
      const sql = this.buildQueryItems(filterConditions, validSize, offset, sortBy, sortOrder);
      const result = await pool.query(sql, params);
  
      return this.formatResultItems(result.rows, { offset, limit: validSize });
    } catch (error) {
      console.error(`Error retrieving ${ITEMS_NAME}:`, error);
      return null;
    }
  }

  formatResultItems(result, { offset, limit }) {
    const dynamicKey = ITEM_KEY;
    const { totals = {}, [dynamicKey]: data = [] } = result[0] || {};
  
    const count = totals?.currentPageTotals?.count ?? 0;
    const globalCount = totals?.globalTotals?.count ?? 0;
    const totalPages = Math.ceil(globalCount / limit);
  
    return {
      metadata: {
        totals: {
          currentPageTotals: {
            count,
            offset,
            limit
          },
          globalTotals: {
            count: globalCount,
            totalPages
          }
        }
      },
      data
    };
  }

  buildQueryItems(filterConditions, limit, offset, sortBy = 'name', sortOrder = 'ASC') {
    return `
      WITH filtered_data AS (
        SELECT id, name
        FROM ${TABLE_NAME}
        ${filterConditions}
        ORDER BY ${sortBy} ${sortOrder}
      ),
      pagination_data AS (
        SELECT
          id,
          name
        FROM filtered_data
        ORDER BY ${sortBy} ${sortOrder}
        LIMIT ${limit} OFFSET ${offset}
      ),
      global_totals AS (
        SELECT COUNT(*) AS count
        FROM filtered_data
      ),
      current_page_totals AS (
        SELECT COUNT(*) AS count
        FROM pagination_data
      )
      SELECT
        (
          SELECT JSON_BUILD_OBJECT(
            'currentPageTotals',
              JSON_BUILD_OBJECT('count', current_page_totals.count),
            'globalTotals',
              JSON_BUILD_OBJECT('count', global_totals.count)
          )
          FROM current_page_totals, global_totals
        ) AS totals,
        (
          SELECT JSON_AGG(pagination_data.*)
          FROM pagination_data
        ) AS ${TABLE_NAME};
    `;
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
