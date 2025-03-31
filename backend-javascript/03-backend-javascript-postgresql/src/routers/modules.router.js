import express from 'express';

import cityRouter from '../modules/city/city.router.js';
import continentRouter from '../modules/continent/item.router.js';
import countryRouter from '../modules/country/item.router.js';
import personRouter from '../modules/person/item.router.js';
import professionRouter from '../modules/profession/item.router.js';

const router = express.Router();

router.use('/cities', cityRouter);
router.use('/continents', continentRouter);
router.use('/countries', countryRouter);
router.use('/persons', personRouter);
router.use('/professions', professionRouter);

export default router;

