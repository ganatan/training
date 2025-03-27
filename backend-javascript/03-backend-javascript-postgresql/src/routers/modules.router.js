import express from 'express';

import personRouter from '../modules/person/person.router.js';
import cityRouter from '../modules/city/city.router.js';
import professionRouter from '../modules/profession/item.router.js';
import continentRouter from '../modules/continent/item.router.js';

const router = express.Router();

router.use('/persons', personRouter);
router.use('/cities', cityRouter);
router.use('/professions', professionRouter);
router.use('/continents', continentRouter);

export default router;

