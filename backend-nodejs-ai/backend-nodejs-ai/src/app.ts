import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/persons', (req, res) => {
  res.json({ aaaa: 1111111 });
});

app.get('*', (req, res) => {
  res.json({ aaaa: 7777777 });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
