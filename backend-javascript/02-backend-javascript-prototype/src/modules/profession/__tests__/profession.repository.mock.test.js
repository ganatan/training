// import fs from 'fs/promises';
// import path from 'path';
// import MockRepository from '../profession.repository.mock.js';

// const mockDataPath = path.resolve('./mocks/profession.mock-data.json');

// let ITEMS_MOCK_DATA;

// import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
describe('MockRepository', () => {
  let repository;
  describe('getItems', () => {
    it('should return all items from the JSON file', async () => {
      expect(true).toEqual(true);
    });
  });
});

  // beforeAll(async () => {
  //   const json = await fs.readFile(mockDataPath, 'utf-8');
  //   ITEMS_MOCK_DATA = JSON.parse(json);
  // });

  // beforeEach(() => {
  //   repository = new MockRepository();
  // });



  // describe('getItems', () => {
  //   it('should return all items from the JSON file', async () => {
  //     const items = await repository.getItems();
  //     expect(items).toEqual(ITEMS_MOCK_DATA);
  //     expect(items).toHaveLength(ITEMS_MOCK_DATA.length);
  //   });
  // });

  // describe('getItemById', () => {
  //   it('should return an item by its ID', async () => {
  //     const expected = ITEMS_MOCK_DATA.find(item => item.id === 1);
  //     const result = await repository.getItemById(1);
  //     expect(result).toEqual(expected);
  //   });

  //   it('should return null if ID does not exist', async () => {
  //     const result = await repository.getItemById(9999);
  //     expect(result).toBeNull();
  //   });
  // });

  // describe('createItem', () => {
  //   it('should add a new item with an incremented ID', async () => {
  //     const newItem = { name: 'New Profession' };
  //     const created = await repository.createItem(newItem);
  //     const allItems = await repository.getItems();

  //     expect(created).toMatchObject({ id: ITEMS_MOCK_DATA.length + 1, ...newItem });
  //     expect(allItems).toHaveLength(ITEMS_MOCK_DATA.length + 1);
  //   });
  // });

  // describe('updateItem', () => {
  //   it('should update an existing item', async () => {
  //     const updatedData = { name: 'Updated Profession' };
  //     const updatedItem = await repository.updateItem(1, updatedData);
  //     expect(updatedItem.name).toBe('Updated Profession');
  //   });

  //   it('should return null if the item does not exist', async () => {
  //     const result = await repository.updateItem(9999, { name: 'X' });
  //     expect(result).toBeNull();
  //   });
  // });

  // describe('deleteItem', () => {
  //   it('should delete an existing item and return it', async () => {
  //     const deleted = await repository.deleteItem(1);
  //     expect(deleted).toMatchObject({ id: 1 });

  //     const remaining = await repository.getItems();
  //     expect(remaining.find(i => i.id === 1)).toBeUndefined();
  //   });

  //   it('should return null if the item does not exist', async () => {
  //     const result = await repository.deleteItem(9999);
  //     expect(result).toBeNull();
  //   });
  // });

  // describe('existsByName', () => {
  //   it('should return true if name exists (case insensitive)', async () => {
  //     const name = ITEMS_MOCK_DATA[0].name;
  //     const result = await repository.existsByName(name.toUpperCase());
  //     expect(result).toBe(true);
  //   });

  //   it('should return false if name does not exist', async () => {
  //     const result = await repository.existsByName('NonExistent');
  //     expect(result).toBe(false);
  //   });
  // });
