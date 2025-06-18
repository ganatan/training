import express from 'express';
import cors from 'cors';
import podcastRoute from './routes/podcast.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('podcast-builder');
})

app.use('/api/podcast', podcastRoute);

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
