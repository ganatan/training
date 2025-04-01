import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const items = {
    metadata: {
      pagination: {
        currentPage: 1,
        perPage: 10,
        totalItems: 5,
        totalPages: 1,
      },
    },
    data: [
      {
        id: 1004,
        name: 'Europe Backend Mock',
        code: 'EU',
        area: 10180000,
        population: 742648000,
        countriesCount: 45,
        density: '72.00000',
      },
    ],
  };
  res.status(200).json(items);
});

export default router;
