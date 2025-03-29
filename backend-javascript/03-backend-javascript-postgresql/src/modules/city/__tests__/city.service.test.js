import CityService from '../city.service.js';
import * as schema from '../city.schema.js';
import { HTTP_STATUS } from '../../../shared/constants/http-status.js';

jest.mock('../city.schema.js');

describe('CityService', () => {
  let service;
  let repository;

  beforeEach(() => {
    repository = {
      getItems: jest.fn(),
      getItemById: jest.fn(),
      createItem: jest.fn(),
      updateItem: jest.fn(),
      deleteItem: jest.fn(),
      existsByName: jest.fn(),
    };

    schema.validateItem.mockImplementation(() => true);

    service = new CityService(repository);
  });

  test('getItems should return all cities', async () => {
    // Arrange
    const expected = [{ id: 1, name: 'Cincinnati' }];
    repository.getItems.mockResolvedValue(expected);

    // Act
    const result = await service.getItems();

    // Assert
    expect(result).toEqual(expected);
    expect(repository.getItems).toHaveBeenCalledTimes(1);
  });

  test('getItemById should return a city', async () => {
    // Arrange
    const expected = { id: 1, name: 'Cincinnati' };
    repository.getItemById.mockResolvedValue(expected);

    // Act
    const result = await service.getItemById(1);

    // Assert
    expect(result).toEqual(expected);
    expect(repository.getItemById).toHaveBeenCalledWith(1);
  });

  test('getItemById should return null if city not found', async () => {
    // Arrange
    repository.getItemById.mockResolvedValue(null);

    // Act
    const result = await service.getItemById(999);

    // Assert
    expect(result).toBeNull();
  });

  test('createItem should create a city if valid and not exists', async () => {
    // Arrange
    const newCity = { name: 'Los Angeles' };
    const expected = { id: 10, ...newCity };
    repository.existsByName.mockResolvedValue(false);
    repository.createItem.mockResolvedValue(expected);

    // Act
    const result = await service.createItem(newCity);

    // Assert
    expect(schema.validateItem).toHaveBeenCalledWith(newCity);
    expect(repository.existsByName).toHaveBeenCalledWith('Los Angeles');
    expect(result).toEqual(expected);
  });

  test('createItem should throw 409 if city already exists', async () => {
    // Arrange
    const city = { name: 'Paris' };
    repository.existsByName.mockResolvedValue(true);

    // Act & Assert
    await expect(service.createItem(city)).rejects.toMatchObject({
      message: 'City already exists',
      status: HTTP_STATUS.CONFLICT,
    });
  });

  test('createItem should throw 400 if validation fails', async () => {
    // Arrange
    schema.validateItem.mockImplementation(() => {
      throw new Error('Invalid data');
    });

    const invalidCity = {};

    // Act & Assert
    await expect(service.createItem(invalidCity)).rejects.toMatchObject({
      message: 'Invalid data',
      status: HTTP_STATUS.BAD_REQUEST,
    });
  });

  test('updateItem should update and return the city', async () => {
    // Arrange
    const update = { name: 'Updated City' };
    const expected = { id: 2, ...update };
    repository.updateItem.mockResolvedValue(expected);

    // Act
    const result = await service.updateItem(2, update);

    // Assert
    expect(schema.validateItem).toHaveBeenCalledWith(update);
    expect(result).toEqual(expected);
    expect(repository.updateItem).toHaveBeenCalledWith(2, update);
  });

  test('updateItem should return null if not found', async () => {
    // Arrange
    repository.updateItem.mockResolvedValue(null);

    // Act
    const result = await service.updateItem(999, { name: 'X' });

    // Assert
    expect(result).toBeNull();
  });

  test('updateItem should throw 400 if validation fails', async () => {
    // Arrange
    schema.validateItem.mockImplementation(() => {
      throw new Error('Validation failed');
    });

    // Act & Assert
    await expect(service.updateItem(1, {})).rejects.toMatchObject({
      message: 'Validation failed',
      status: HTTP_STATUS.BAD_REQUEST,
    });
  });

  test('deleteItem should delete and return the city', async () => {
    // Arrange
    const expected = { id: 3, name: 'Tokyo' };
    repository.deleteItem.mockResolvedValue(expected);

    // Act
    const result = await service.deleteItem(3);

    // Assert
    expect(result).toEqual(expected);
    expect(repository.deleteItem).toHaveBeenCalledWith(3);
  });

  test('deleteItem should return null if city not found', async () => {
    // Arrange
    repository.deleteItem.mockResolvedValue(null);

    // Act
    const result = await service.deleteItem(999);

    // Assert
    expect(result).toBeNull();
  });
});
