import express, { Application } from 'express';
// import cors from 'cors';

import modulesRouter from './routers/modules.router';
import rootRouter from './routers/root.router';

const app: Application = express();

// app.use(cors());
// app.use(express.json());

app.use(modulesRouter);

app.use('/', rootRouter);
app.use('*', rootRouter);

export default app;
