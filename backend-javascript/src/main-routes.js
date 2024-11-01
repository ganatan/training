import express from 'express';

import continent from './features/continent/continent-route.js';
import setup from './features/setup/setup-route.js';
import index from './index-routes.js';

const router = express.Router();

router.use('/continents', continent);
router.use('/setup', setup);
router.use('/', index);
router.use('*', index);

export default router;
