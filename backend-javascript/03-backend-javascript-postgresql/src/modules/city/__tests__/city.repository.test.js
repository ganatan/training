import CityRepository from '../city.repository.js';
import { ITEMS_MOCK_DATA } from '../../../mocks/city.mock-data.js';

describe('CityRepository', () => {
  let repository;

  beforeEach(() => {
    repository = new CityRepository(false);
    repository.items = JSON.parse(JSON.stringify(ITEMS_MOCK_DATA));
  });

  describe('getItems', () => {
    it('should return all cities', async () => {
      // Arrange
      const expectedLength = ITEMS_MOCK_DATA.length;

      // Act
      const items = await repository.getItems();

      // Assert
      expect(Array.isArray(items)).toBe(true);
      expect(items).toHaveLength(expectedLength);
    });
  });

  describe('getItemById', () => {
    it('should return a city by ID', async () => {
      // Arrange
      const expectedCity = ITEMS_MOCK_DATA.find(city => city.id === 1);

      // Act
      const city = await repository.getItemById(1);

      // Assert
      expect(city).toEqual(expectedCity);
    });

    it('should return null if city is not found', async () => {
      // Act
      const city = await repository.getItemById(999);

      // Assert
      expect(city).toBeNull();
    });
  });

  describe('createItem', () => {
    it('should add a new city', async () => {
      // Arrange
      const newCity = { name: 'Los Angeles' };
      const expectedLength = ITEMS_MOCK_DATA.length + 1;

      // Act
      const createdCity = await repository.createItem(newCity);
      const allCities = await repository.getItems();

      // Assert
      expect(createdCity).toMatchObject({ id: expectedLength, name: 'Los Angeles' });
      expect(allCities).toHaveLength(expectedLength);
    });
  });

  describe('deleteItem', () => {
    it('should remove a city and return it', async () => {
      // Arrange
      const cityIdToDelete = 1;
      const expectedCity = ITEMS_MOCK_DATA.find(city => city.id === cityIdToDelete);
      const expectedLength = ITEMS_MOCK_DATA.length - 1;

      // Act
      const deletedCity = await repository.deleteItem(cityIdToDelete);
      const allCities = await repository.getItems();
      const city = await repository.getItemById(cityIdToDelete);

      // Assert
      expect(deletedCity).toMatchObject(expectedCity);
      expect(allCities).toHaveLength(expectedLength);
      expect(city).toBeNull();
    });
  });
});
