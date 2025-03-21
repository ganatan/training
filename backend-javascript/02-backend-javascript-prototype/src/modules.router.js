import express from 'express';

import personRouter from './modules/person/person.router.js';
import cityRouter from './modules/city/city.router.js';

const router = express.Router();

router.use('/persons', personRouter);
router.use('/cities', cityRouter);

export default router;

