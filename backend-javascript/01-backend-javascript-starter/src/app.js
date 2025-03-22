import express from 'express';
import config from './config/config.js';

const app = express();

const persons = [
  { id: 1, name: 'mock Steven Spielberg', city: 'Cincinnati' },
  { id: 2, name: 'mock Martin Scorsese', city: 'New York' },
  { id: 3, name: 'mock Quentin Tarantino', city: 'Knoxville' },
  { id: 4, name: 'mock Christopher Nolan', city: 'London' },
  { id: 5, name: 'mock Francis Ford Coppola', city: 'Detroit' },
  { id: 6, name: 'mock James Cameron', city: 'Kapuskasing' },
  { id: 7, name: 'mock David Fincher', city: 'Denver' },
  { id: 8, name: 'mock Tim Burton', city: 'Burbank' },
  { id: 9, name: 'mock Clint Eastwood', city: 'San Francisco' },
  { id: 10, name: 'mock Wes Anderson', city: 'Houston' },
  { id: 11, name: 'mock Spike Lee', city: 'Atlanta' },
  { id: 12, name: 'mock George Lucas', city: 'Modesto' },
];

const cities = [
  { id: 1, name: 'mock Cincinnati' },
  { id: 2, name: 'mock New York' },
  { id: 3, name: 'mock Knoxville' },
  { id: 4, name: 'mock London' },
  { id: 5, name: 'mock Detroit' },
  { id: 6, name: 'mock Kapuskasing' },
  { id: 7, name: 'mock Denver' },
  { id: 8, name: 'mock Burbank' },
  { id: 9, name: 'mock San Francisco' },
  { id: 10, name: 'mock Houston' },
  { id: 11, name: 'mock Atlanta' },
  { id: 12, name: 'mock Modesto' },
];

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

app.get('/persons', (req, res) => {
  res.json(persons);
});

app.get('/cities', (req, res) => {
  res.json(cities);
});

app.get('/', (req, res) => {
  res.json(root);
});

export default app;
