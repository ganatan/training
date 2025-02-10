import express from 'express';
import personRoute from './features/person/person-route.js';

const router = express.Router();

router.use('/persons', personRoute);

export default router;

