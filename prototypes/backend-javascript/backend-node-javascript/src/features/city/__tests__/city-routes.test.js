import request from 'supertest';
import express from 'express';
import cityRoutes from '../city-routes.js';

const app = express();
app.use(express.json());
app.use('/cities', cityRoutes);

describe('City Routes', () => {
  test('GET /cities should return all cities', async () => {
    // Arrange

    // Act
    const res = await request(app).get('/cities');

    // Assert
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(12);
  });

  test('POST /cities should create a new city', async () => {
    // Arrange
    const newCity = { name: 'Los Angeles' };

    // Act
    const res = await request(app).post('/cities').send(newCity);

    // Assert
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ id: 13, name: 'Los Angeles' });
  });

  test('DELETE /cities/:id should return 404 if city not found', async () => {
    // Arrange

    // Act
    const res = await request(app).delete('/cities/999');

    // Assert
    expect(res.status).toBe(404);
    expect(res.body.message).toBe('City not found');
  });
});
