import express from 'express';
import { ROUTES } from '../shared/constants/routes.constants.js';

const router = express.Router();

router.get('/', (req, res) => {
  const endpoints = {};

  Object.entries(ROUTES).forEach(([key, { path, methods }]) => {
    endpoints[key] = {
      url: path,
      methods: methods,
    };
  });

  res.json(
    {
      success: true,
      data: {
        version: '1.0.0',
        status: 'ok',
        timestamp: new Date().toISOString(),
        endpoints: endpoints,
      }
    }
  );
});

export default router;
