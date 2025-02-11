import express from 'express';
import PersonController from './person-controller.js';
import PersonService from './person-service.js';
import PersonRepository from './person-repository.js';

const router = express.Router();

const repository = new PersonRepository();
const service = new PersonService(repository);
const controller = new PersonController(service);

router.get('/', controller.getItems);

export default router;
