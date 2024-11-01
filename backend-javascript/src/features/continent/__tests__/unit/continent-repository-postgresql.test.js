
import PostgreSQLAdapter from '../../continent-repository-postgresql';
import { MAX_INTEGER, MIN_INTEGER } from '../../../../shared/constants/data-limits-constants';

jest.mock('../../../../shared/utils/query-utils', () => ({
  truncate: jest.fn((value, length) => value.slice(0, length)),
}));

describe('PostgreSQLAdapter', () => {
  let dbClientMock;
  let adapter;

  beforeEach(() => {
    dbClientMock = { query: jest.fn() };
    adapter = new PostgreSQLAdapter(dbClientMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItems', () => {

    test('should return null on error', async () => {
      dbClientMock.query.mockRejectedValue(new Error('Database error'));

      const req = { query: {} };
      const result = await adapter.getItems(req);

      expect(result).toBeNull();
      expect(dbClientMock.query).toHaveBeenCalled();
    });
  });

  describe('getItem', () => {
    test('should return null when item not found', async () => {
      dbClientMock.query.mockResolvedValue({ rows: [] });

      const result = await adapter.getItem(999);

      expect(result).toBeNull();
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.any(String), [999]);
    });
  });

  describe('createItem', () => {
    test('should insert data and return result when data is valid', async () => {
      dbClientMock.query.mockResolvedValue({ rowCount: 1 });

      const continentData = { code: 'EU', name: 'Europe', wikipediaLink: '', area: 100, population: 500, countriesNumber: 10 };
      const result = await adapter.createItem(continentData);

      expect(result.rowCount).toBe(1);
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.any(String), [
        'EU',
        'Europe',
        '',
        100,
        500,
        10,
      ]);
    });

    test('should return null when data is invalid', async () => {
      const continentData = { code: 'EU', name: 'Europe', wikipediaLink: '', area: MAX_INTEGER + 1, population: 500, countriesNumber: 10 };
      const result = await adapter.createItem(continentData);

      expect(result).toBeNull();
      expect(dbClientMock.query).not.toHaveBeenCalled();
    });
  });

  describe('updateItem', () => {
    test('should update data and return result when data is valid', async () => {
      dbClientMock.query.mockResolvedValue({ rowCount: 1 });

      const continentData = { code: 'EU', name: 'Europe', wikipediaLink: '', area: 100, population: 500, countriesNumber: 10 };
      const result = await adapter.updateItem(1, continentData);

      expect(result.rowCount).toBe(1);
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.any(String), [
        'EU',
        'Europe',
        '',
        100,
        500,
        10,
        1,
      ]);
    });

    test('should return null when data is invalid', async () => {
      const continentData = { code: 'EU', name: 'Europe', wikipediaLink: '', area: MIN_INTEGER - 1, population: 500, countriesNumber: 10 };
      const result = await adapter.updateItem(1, continentData);

      expect(result).toBeNull();
      expect(dbClientMock.query).not.toHaveBeenCalled();
    });
  });

  describe('deleteItem', () => {
    test('should delete item and return result', async () => {
      dbClientMock.query.mockResolvedValue({ rowCount: 1 });

      const result = await adapter.deleteItem(1);

      expect(result.rowCount).toBe(1);
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.any(String), [1]);
    });

    test('should return null on error', async () => {
      dbClientMock.query.mockRejectedValue(new Error('Delete error'));

      const result = await adapter.deleteItem(1);

      expect(result).toBeNull();
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.any(String), [1]);
    });
  });

  describe('validateContinentData', () => {
    test('should return true for valid data', () => {
      const isValid = adapter.validateContinentData({ area: 100, population: 500, countriesNumber: 10 });

      expect(isValid).toBe(true);
    });

    test('should return false for invalid area', () => {
      const isValid = adapter.validateContinentData({ area: MAX_INTEGER + 1, population: 500, countriesNumber: 10 });

      expect(isValid).toBe(false);
    });

    test('should return false for invalid countriesNumber', () => {
      const isValid = adapter.validateContinentData({ area: 100, population: 500, countriesNumber: MAX_INTEGER + 1 });

      expect(isValid).toBe(false);
    });
  });
});
