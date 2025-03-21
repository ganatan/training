import express from 'express';

import modulesRouter from './modules.router.js';
import rootRouter from './root.router.js';

const app = express();

app.use(modulesRouter);

app.use('/', rootRouter);
app.use('*', rootRouter);

export default app;
