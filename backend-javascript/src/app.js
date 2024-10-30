console.log('00000000002');

import express from 'express';
import cors from 'cors';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from './infrastructure/swagger/swagger-doc.js';

import handleResponse from './infrastructure/logger/response-handler.js';
import handleError from './infrastructure/errors/error-handler.js';
import requestLogger from './infrastructure/logger/request-logger.js';

import routes from './main-routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

app.use(requestLogger);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', routes);

app.use(handleResponse);
app.use(handleError);

export default app;

/*
app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
}));
*/
