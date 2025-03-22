import express from 'express';
import config from './config/config.js';

const router = express.Router();

const url = `http://localhost:${config.port}`;
const root = {
  endpoints: [
    {
      url: `${url}/persons`,
    },
    {
      url: `${url}/cities`,
    },
  ],
};

router.get('/', (req, res) => {
  res.json(root);
});

router.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Resource not found',
    url: req.originalUrl,
    errorCode: 404,
    timestamp: new Date().toISOString(),
  });
});

export default router;
