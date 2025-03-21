#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moduleName = process.argv[2];

if (!moduleName) {
  console.error('Usage: node generate-module.js <module-name>');
  process.exit(1);
}

const pascalModule = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
const baseDir = path.resolve(__dirname, '../../src/modules', moduleName);
const testsDir = path.join(baseDir, '__tests__');

fs.mkdirSync(baseDir, { recursive: true });
fs.mkdirSync(testsDir, { recursive: true });

const write = (filePath, content) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created: ${filePath}`);
  }
};

write(path.join(baseDir, `${moduleName}.controller.js`), `export default class ${pascalModule}Controller {
  constructor(service) {
    this.service = service;
  }

  async getItems(req, res, next) {
    try {
      const result = await this.service.getItems();
      res.locals.data = result;
      next();
    } catch (error) {
      next(error);
    }
  }

  async getItemById(req, res, next) {
    try {
      const result = await this.service.getItemById(Number(req.params.id));
      res.locals.data = result;
      next();
    } catch (error) {
      next(error);
    }
  }

  async createItem(req, res, next) {
    try {
      const result = await this.service.createItem(req.body);
      res.locals.data = result;
      next();
    } catch (error) {
      next(error);
    }
  }

  async updateItem(req, res, next) {
    try {
      const result = await this.service.updateItem(Number(req.params.id), req.body);
      res.locals.data = result;
      next();
    } catch (error) {
      next(error);
    }
  }

  async deleteItem(req, res, next) {
    try {
      const result = await this.service.deleteItem(Number(req.params.id));
      res.locals.data = result;
      next();
    } catch (error) {
      next(error);
    }
  }
}
`);

write(path.join(baseDir, `${moduleName}.service.js`), `export default class ${pascalModule}Service {
  constructor(repository) {
    this.repository = repository;
  }

  async getItems() {
    return this.repository.getItems();
  }

  async getItemById(id) {
    return this.repository.getItemById(id);
  }

  async createItem(data) {
    return this.repository.createItem(data);
  }

  async updateItem(id, data) {
    return this.repository.updateItem(id, data);
  }

  async deleteItem(id) {
    return this.repository.deleteItem(id);
  }
}
`);

write(path.join(baseDir, `${moduleName}.repository.js`), `import ${pascalModule}MockRepository from './${moduleName}.repository.mock.js';

export default class ${pascalModule}Repository {
  constructor() {
    this.repository = new ${pascalModule}MockRepository();
  }

  async getItems() {
    return this.repository.getItems();
  }

  async getItemById(id) {
    return this.repository.getItemById(id);
  }

  async createItem(data) {
    return this.repository.createItem(data);
  }

  async updateItem(id, data) {
    return this.repository.updateItem(id, data);
  }

  async deleteItem(id) {
    return this.repository.deleteItem(id);
  }
}
`);

write(path.join(baseDir, `${moduleName}.repository.mock.js`), `import { ${moduleName}MockData } from './${moduleName}.mock-data.js';

export default class ${pascalModule}MockRepository {
  constructor() {
    this.items = JSON.parse(JSON.stringify(${moduleName}MockData));
  }

  async getItems() {
    return this.items;
  }

  async getItemById(id) {
    return this.items.find((item) => item.id === id) || null;
  }

  async createItem(data) {
    const newItem = { id: this.items.length + 1, ...data };
    this.items.push(newItem);
    return newItem;
  }

  async updateItem(id, data) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    this.items[index] = { ...this.items[index], ...data };
    return this.items[index];
  }

  async deleteItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    return this.items.splice(index, 1)[0];
  }
}
`);

write(path.join(baseDir, `${moduleName}.mock-data.js`), `export const ${moduleName}MockData = [
  { id: 1, name: '${pascalModule} 1' },
  { id: 2, name: '${pascalModule} 2' }
];
`);

write(path.join(baseDir, `${moduleName}.router.js`), `import express from 'express';
import responseHandler from '../../middlewares/response-handler.js';

import ${pascalModule}Repository from './${moduleName}.repository.js';
import ${pascalModule}Service from './${moduleName}.service.js';
import ${pascalModule}Controller from './${moduleName}.controller.js';

const router = express.Router();

const repository = new ${pascalModule}Repository();
const service = new ${pascalModule}Service(repository);
const controller = new ${pascalModule}Controller(service);

router.get('/', controller.getItems, responseHandler);
router.get('/:id', controller.getItemById, responseHandler);
router.post('/', controller.createItem, responseHandler);
router.put('/:id', controller.updateItem, responseHandler);
router.delete('/:id', controller.deleteItem, responseHandler);

export default router;
`);

const testTemplate = (type) => `test('${type} basic', async () => {
  expect(true).toBe(true);
});
`;

['controller', 'service', 'repository', 'router'].forEach((type) => {
  const testPath = path.join(testsDir, `${moduleName}.${type}.test.js`);
  write(testPath, testTemplate(`${type}`));
});
