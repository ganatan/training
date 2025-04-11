import express from 'express';
import cors from 'cors';

import modulesRouter from './routers/modules.router.js';
import rootRouter from './routers/root.router.js';

import responseHandler from './infrastructure/middleware/response-handler.js'
import errorHandler from './infrastructure/middleware/error-handler.js'
import notFoundHandler from './infrastructure/middleware/not-found-handler.js'

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  res.locals = res.locals || {};
  next();
});

app.use(rootRouter);

app.use(modulesRouter);

app.use(notFoundHandler)
app.use(responseHandler)
app.use(errorHandler)

export default app;
