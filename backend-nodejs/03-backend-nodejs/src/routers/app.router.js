import express from 'express';

import cityRouter from '../modules/city/routes/city.router.js';
import continentRouter from '../modules/continent/routes/continent.router.js';
import countryRouter from '../modules/country/routes/country.router.js';
import personRouter from '../modules/person/routes/person.router.js';
import professionRouter from '../modules/profession/routes/profession.router.js';
import mediaTypeRouter from '../modules/media-type/routes/media-type.router.js';
import mediaRouter from '../modules/media/routes/media.router.js';

const router = express.Router();

router.use('/cities', cityRouter);
router.use('/continents', continentRouter);
router.use('/countries', countryRouter);
router.use('/persons', personRouter);
router.use('/professions', professionRouter);
router.use('/medias', mediaRouter);
router.use('/media-types', mediaTypeRouter);

export default router;

