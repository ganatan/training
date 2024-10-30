import express from 'express';
import continent from './features/continent/continent-route.js';
import index from './index-routes.js';

const router = express.Router();

router.use('/continents', continent);
router.use('/', index);
router.use('*', index);

export default router;
