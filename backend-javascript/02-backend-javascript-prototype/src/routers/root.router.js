import express from 'express';
import { ROUTES } from '../shared/constants/routes.js';

const router = express.Router();

const endpoints = Object.entries(ROUTES).reduce((acc, [key, route]) => {
  acc[key] = {
    url: route.path,
    methods: route.methods,
  };

  return acc;
}, {});

const root = {
  version: '1.0.0',
  status: 'ok',
  timestamp: new Date().toISOString(),
  endpoints: endpoints,
};

router.get('/', (req, res) => {
  res.status(200).json(root);
});

router.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Resource not found',
    path: req.originalUrl,
    errorCode: 404,
    timestamp: new Date().toISOString(),
  });
});

export default router;
