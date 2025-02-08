const express = require('express');
const app = express();
const port = 3000;

const directors = [
  { name: 'Steven Spielberg', city: 'Cincinnati' },
  { name: 'Martin Scorsese', city: 'New York' },
  { name: 'Quentin Tarantino', city: 'Knoxville' },
  { name: 'Christopher Nolan', city: 'London' },
  { name: 'Francis Ford Coppola', city: 'Detroit' },
  { name: 'James Cameron', city: 'Kapuskasing' },
  { name: 'David Fincher', city: 'Denver' },
  { name: 'Tim Burton', city: 'Burbank' },
  { name: 'Clint Eastwood', city: 'San Francisco' },
  { name: 'Wes Anderson', city: 'Houston' },
  { name: 'Spike Lee', city: 'Atlanta' },
  { name: 'George Lucas', city: 'Modesto' }
];

app.get('/directors', (req, res) => {
  res.json(directors);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});