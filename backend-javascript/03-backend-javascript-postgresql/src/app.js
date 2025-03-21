import express from 'express';

import featuresRoutes from './features-routes.js';
import mainRoutes from './main-routes.js';

const app = express();

app.use(featuresRoutes);

app.use('/', mainRoutes);
app.use('*', mainRoutes);

export default app;
