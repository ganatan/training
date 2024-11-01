import express from 'express';

import featuresRoutes from './features-routes.js';
import indexRoutes from './index-routes.js';

const router = express.Router();

router.use('/', featuresRoutes);

router.use('/', indexRoutes);
router.use('*', indexRoutes);

export default router;
