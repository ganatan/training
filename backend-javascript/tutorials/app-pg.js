const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 9000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'angular_backend',
  password: 'Trustno1',
  DB_CLIENT: 'pg',
  port: 5432,
});

app.get('/continents', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM continent');
    res.json(result.rows); 
  } catch (err) {
    console.error('Erreur lors de la récupération des continents', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
