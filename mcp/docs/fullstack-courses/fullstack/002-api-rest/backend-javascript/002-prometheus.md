
npm install prom-client


metrics.js

import client from 'prom-client';

client.collectDefaultMetrics();

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Nombre total de requêtes HTTP',
  labelNames: ['method', 'route', 'status']
});

function incrementHttpRequests(method, route, status) {
  httpRequestCounter.inc({ method, route, status });
}

export { client, incrementHttpRequests };



metrics.routes.js

import express from 'express';
import { client } from '../infrastructure/metrics/metrics.js';

const router = express.Router();

router.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  const metric = await client.register.getSingleMetricAsString('http_requests_total');
  res.end(metric);

  //   res.set('Content-Type', client.register.contentType);
//   res.end(await client.register.metrics());

});

export default router;
