import express from 'express';
import { ROUTES } from './shared/constants/routes.js';

const router = express.Router();

const endpoints = Object.entries(ROUTES).reduce((acc, [key, route]) => {
  acc[key] = {
    url: route.path,
    methods: route.methods
  };
  return acc;
}, {});

const root = {
  version: '1.0.0',
  status: 'ok',
  timestamp: new Date().toISOString(),
  endpoints
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
    timestamp: new Date().toISOString()
  });
});

export default router;



// import express from 'express';

// const router = express.Router();

// const root = {
//   version: '1.0.0',
//   status: 'ok',
//   endpoints: {
//     persons: {
//       url: '/persons',
//       methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     },
//     cities: {
//       url: '/cities',
//       methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     },
//   },
//   timestamp: new Date().toISOString(),
// };

// router.get('/', (req, res) => {
//   res.status(200).json(root);
// });

// router.use((req, res) => {
//   res.status(404).json({
//     status: 'error',
//     message: 'Resource not found',
//     path: req.originalUrl,
//     errorCode: 404,
//     timestamp: new Date().toISOString(),
//   });
// });

// export default router;



// // import express from 'express';
// // import config from './config/config.js';

// // const router = express.Router();

// // const url = `http://localhost:${config.port}`;
// // const root = {
// //   endpoints: [
// //     {
// //       url: `${url}/persons`,
// //     },
// //     {
// //       url: `${url}/cities`,
// //     },
// //   ],
// // };

// // router.get('/', (req, res) => {
// //   res.json(root);
// // });

// // router.use((req, res) => {
// //   res.status(404).json({
// //     status: 'error',
// //     message: 'Resource not found',
// //     url: req.originalUrl,
// //     errorCode: 404,
// //     timestamp: new Date().toISOString(),
// //   });
// // });

// // export default router;
