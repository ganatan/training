import request from 'supertest';
import express, { Application } from 'express';
import rootRouter from '../../src/routers/root.router';

const app: Application = express();
app.use('/', rootRouter);

describe('Root Router', () => {
  test('should return API status and endpoints on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('version');
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('endpoints');
    expect(typeof response.body.endpoints).toBe('object');
  });

  test('should return 404 JSON on unknown route', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('status', 'error');
    expect(response.body).toHaveProperty('message', 'Resource not found');
    expect(response.body).toHaveProperty('errorCode', 404);
    expect(response.body).toHaveProperty('timestamp');
  });
});
