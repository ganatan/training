import { Router, Request, Response } from 'express';
import { ROUTES } from '../shared/constants/routes/routes.constants';
import config from '../core/config/config';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const endpoints: Record<string, { url: string; methods: string[] }> = {};

  for (const [key, { path, methods }] of Object.entries(ROUTES)) {
    endpoints[key] = {
      url: path,
      methods: methods,
    };
  }

  res.status(200).json({
    success: true,
    data: {
      version: config.version,
      status: 'ok',
      timestamp: new Date().toISOString(),
      endpoints: endpoints,
    },
  });
});

router.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Resource not found',
    path: req.originalUrl,
    errorCode: 404,
    timestamp: new Date().toISOString(),
  });
});

export default router;

