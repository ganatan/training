import pool from '../../core/database/database.js';

import {
  addFilterCondition,
  adaptSortField,
  addRangeCondition,
  addDensityCondition,
} from '../../shared/utils/query/query-utils.js';

import {
  MAX_INTEGER,
} from '../../shared/constants/data-limits.constants.js';

const ITEMS_NAME = 'continent';
const TABLE_NAME = 'continent';

class PgRepository {

  async getItems(filters) {
    try {
      const {
        page = 1,
        size = 10,
        sort = 'name',
        name = '',
        code = '',
        areaMin = null,
        areaMax = null,
        populationMin = null,
        populationMax = null,
        countriesNumberMin = null,
        countriesNumberMax = null,
        densityMin = null,
        densityMax = null,
      } = filters;

      const currentPage = Math.max(1, parseInt(page, 10));
      const perPage = Math.max(1, parseInt(size, 10));
      const offset = (currentPage - 1) * perPage;

      let filterConditions = 'WHERE (1 = 1) AND (id >= 1000)';
      const filterParams = [];

      filterConditions = addFilterCondition(filterConditions, filterParams, 'name', name);
      filterConditions = addFilterCondition(filterConditions, filterParams, 'name', name);
      filterConditions = addFilterCondition(filterConditions, filterParams, 'code', code);
      filterConditions = addRangeCondition(filterConditions, filterParams, 'area', areaMin, areaMax, 0, MAX_INTEGER);
      filterConditions = addRangeCondition(filterConditions, filterParams, 'population', populationMin, populationMax);
      filterConditions = addRangeCondition(filterConditions, filterParams, 'countries_number', countriesNumberMin, countriesNumberMax);
      filterConditions = addDensityCondition(filterConditions, filterParams, densityMin, densityMax);

      const sortMapping = {
        creationDate: 'creation_date',
        releaseDate: 'release_date',
      };
      let sortBy = adaptSortField(sort, sortMapping);
      const sortOrder = sort.startsWith('-') ? 'DESC' : 'ASC';
      if (sort.startsWith('-')) {
        sortBy = sortBy.substring(1);
      }

      const sqlGlobal = this.buildQueryTotals(filterConditions);
      const sqlData = this.buildQueryData(filterConditions, perPage, offset, sortBy, sortOrder);

      const [globalResult, dataResult] = await Promise.all([
        pool.query(sqlGlobal, filterParams),
        pool.query(sqlData, filterParams),
      ]);

      const global = globalResult.rows[0];

      global.density = global.area > 0
        ? parseFloat((parseFloat(global.population) / parseFloat(global.area)).toFixed(5))
        : 0;

      const currentPageStats = this.computeCurrentPageTotals(dataResult.rows);

      return this.formatResultItems(dataResult.rows, {
        currentPage: currentPage,
        perPage: perPage,
        totalItems: parseInt(global.count, 10),
        totals: {
          global: global,
          currentPage: currentPageStats,
        },
      });
    } catch (error) {
      console.error(`Error retrieving ${ITEMS_NAME}:`, error);

      return null;
    }
  }

  computeCurrentPageTotals(rows) {
    let area = 0;
    let population = 0;
    let countriesNumber = 0;
    let count = 0;

    for (const item of rows) {
      count += 1;
      area += parseFloat(item.area || 0);
      population += parseFloat(item.population || 0);
      countriesNumber += parseInt(item.countriesNumber || 0);
    }

    const density = area > 0
      ? parseFloat((population / area).toFixed(5))
      : 0;

    return {
      count,
      area,
      population,
      countriesNumber,
      density,
    };
  }

  formatResultItems(data, { currentPage, perPage, totalItems, totals }) {
    const totalPages = Math.ceil(totalItems / perPage);

    return {
      metadata: {
        pagination: {
          currentPage: currentPage,
          perPage: perPage,
          totalItems: totalItems,
          totalPages: totalPages,
        },
      },
      totals: totals,
      data: data,
    };
  }

  buildQueryTotals(filterConditions) {
    return `
      SELECT 
        COUNT(id) AS count,
        SUM(area) AS area,
        SUM(population::BIGINT) AS population,
        SUM(countries_number) AS "countriesNumber"
      FROM ${TABLE_NAME}
      ${filterConditions};
    `;
  }

  buildQueryData(filterConditions, limit, offset, sortBy = 'name', sortOrder = 'ASC') {
    return `
      SELECT 
        id, 
        name,
        code,
        area,
        population,
        countries_number AS "countriesNumber",
        ROUND((population / NULLIF(area, 0))::NUMERIC, 5) as "density"
      FROM ${TABLE_NAME}
      ${filterConditions}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT ${limit}
      OFFSET ${offset};
    `;
  }

  async getItemById(id) {
    const { rows } = await pool.query(`SELECT * FROM ${TABLE_NAME} WHERE id = $1`, [id]);
    if (!rows.length) { return null; }

    const row = rows[0];

    return {
      id: row.id,
      name: row.name,
    };
  }

  async createItem(data) {
    const { name } = data;
    const { rows } = await pool.query(`INSERT INTO ${TABLE_NAME} (name) VALUES ($1) RETURNING *`, [name]);

    return rows[0];
  }

  async updateItem(id, data) {
    const { name } = data;
    const { rows } = await pool.query(`UPDATE ${TABLE_NAME} SET name = $1 WHERE id = $2 RETURNING *`, [name, id]);

    return rows.length ? rows[0] : null;
  }

  async deleteItem(id) {
    const { rows } = await pool.query(`DELETE FROM ${TABLE_NAME} WHERE id = $1 RETURNING *`, [id]);

    return rows.length ? rows[0] : null;
  }

  async existsByName(name) {
    const { rows } = await pool.query(
      `SELECT 1 FROM ${TABLE_NAME}  WHERE LOWER(name) = LOWER($1) LIMIT 1`,
      [name],
    );

    return rows.length > 0;
  }

}

export default PgRepository;
