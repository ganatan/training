import express from 'express';

import featuresRoutes from './features-routes.js';

const app = express();

app.use(featuresRoutes);

export default app;
