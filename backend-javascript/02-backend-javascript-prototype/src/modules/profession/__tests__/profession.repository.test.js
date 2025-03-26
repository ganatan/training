import Repository from '../profession.repository.js';
import { ITEMS_MOCK_DATA } from '../../../mocks/profession/profession.mock-data.js';

describe('ProfessionRepository', () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
    repository.items = JSON.parse(JSON.stringify(ITEMS_MOCK_DATA));
  });

  describe('getItems', () => {
    it('should return all professions', async () => {
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
    it('should return a profession by ID', async () => {
      // Arrange
      const expectedPerson = ITEMS_MOCK_DATA.find(person => person.id === 1);

      // Act
      const person = await repository.getItemById(1);

      // Assert
      expect(person).toEqual(expectedPerson);
    });

    it('should return null if person is not found', async () => {
      // Act
      const person = await repository.getItemById(999);

      // Assert
      expect(person).toBeNull();
    });
  });

  describe('createItem', () => {
    it('should add a new person', async () => {
      // Arrange
      const newPerson = { name: 'Director' };
      const expectedLength = ITEMS_MOCK_DATA.length + 1;

      // Act
      const createdPerson = await repository.createItem(newPerson);
      const allPersons = await repository.getItems();

      // Assert
      expect(createdPerson).toMatchObject({ id: expectedLength, ...newPerson });
      expect(allPersons).toHaveLength(expectedLength);
    });
  });

  describe('updateItem', () => {
    it('should update an existing person', async () => {
      // Arrange
      const personId = 1;
      const updatedData = { name: 'Updated Name' };
      const expectedPerson = { ...ITEMS_MOCK_DATA.find(person => person.id === personId), ...updatedData };

      // Act
      const updatedPerson = await repository.updateItem(personId, updatedData);
      const person = await repository.getItemById(personId);

      // Assert
      expect(updatedPerson).toMatchObject(expectedPerson);
      expect(person.name).toBe('Updated Name');
    });

    it('should return null if person is not found', async () => {
      // Act
      const result = await repository.updateItem(999, { name: 'Updated Name' });

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('deleteItem', () => {
    it('should remove a person and return it', async () => {
      // Arrange
      const personId = 1;
      const expectedPerson = ITEMS_MOCK_DATA.find(person => person.id === personId);
      const expectedLength = ITEMS_MOCK_DATA.length - 1;

      // Act
      const deletedPerson = await repository.deleteItem(personId);
      const allPersons = await repository.getItems();
      const person = await repository.getItemById(personId);

      // Assert
      expect(deletedPerson).toMatchObject(expectedPerson);
      expect(allPersons).toHaveLength(expectedLength);
      expect(person).toBeNull();
    });

    it('should return null if person is not found', async () => {
      // Act
      const result = await repository.deleteItem(999);

      // Assert
      expect(result).toBeNull();
    });
  });
});
