import express from 'express';
import cors from 'cors';

import modulesRouter from './routers/modules.router.js';
import rootRouter from './routers/root.router.js';

// import responseHandler from './infrastructure/logger/response-handler.js'

import responseHandler from './infrastructure/logger/response-handler.js'
import errorHandler from './infrastructure/logger/error-handler.js'
import notFoundHandler from './infrastructure/logger/not-found-handler.js'


const app = express();

app.use(cors());

app.use(express.json());


app.use((req, res, next) => {
  res.locals = res.locals || {};
  next();
});

app.get('/', (req, res) => {
  res.status(200).json(
    {
      "success": true,
      "message": "Welcome to the API. See /api-docs for usage."
    })

})

app.use(modulesRouter);

app.use(notFoundHandler)
app.use(responseHandler)
app.use(errorHandler)

// app.use('/', rootRouter);
// app.use('*', rootRouter);


// app.use((req, res) => {
//   res.status(404).json({
//     status: 'error',
//     message: 'Resource not found',
//   });
// });

export default app;
