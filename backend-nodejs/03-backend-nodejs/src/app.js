import express from 'express';
import cors from 'cors';

import modulesRouter from './routers/modules.router.js';
import rootRouter from './routers/root.router.js';

import responseHandler from './infrastructure/logger/response-handler.js'

const app = express();

app.use(cors());

app.use(express.json());

app.use(modulesRouter);

app.use(responseHandler)

app.use('/', rootRouter);
app.use('*', rootRouter);


// app.use((req, res) => {
//   res.status(404).json({
//     status: 'error',
//     message: 'Resource not found',
//   });
// });

export default app;
