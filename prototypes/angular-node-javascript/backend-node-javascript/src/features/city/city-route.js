import express from 'express';

const router = express.Router();

const cities = [
  'Cincinnati',
  'New York',
  'Knoxville',
  'London',
  'Detroit',
  'Kapuskasing',
  'Denver',
  'Burbank',
  'San Francisco',
  'Houston',
  'Atlanta',
  'Modesto'
];

router.get('/', (req, res) => {
  res.json(cities);
});

export default router;
