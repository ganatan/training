import express from 'express';
import { ROUTES } from '../shared/constants/routes/routes.constants.js';

import config from '../core/config/config.js';

const router = express.Router();

router.get('/', (req, res) => {
  const endpoints = {};

  for (const [key, config] of Object.entries(ROUTES)) {
    endpoints[key] = {
      url: config.path,
      methods: config.methods,
    };
  }

  res.json({
    success: true,
    data: {
      version: config.version,
      status: 'ok',
      timestamp: new Date().toISOString(),
      endpoints,
    },
  });
});

export default router;

