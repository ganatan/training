import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Trustno1',
  database: process.env.DB_NAME || 'backend_node_javascript',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();
app.use(express.json());

app.get('/persons', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM person');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/persons', async (req, res) => {
  const { name, wikipedia_link, birth_date, birth_city_id } = req.body;
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(
      'INSERT INTO person (name, wikipedia_link, birth_date, birth_city_id) VALUES (?, ?, ?, ?)',
      [name, wikipedia_link, birth_date, birth_city_id]
    );
    await connection.commit();
    res.status(201).json({ id: result.insertId, name, wikipedia_link, birth_date, birth_city_id });
  } catch (error) {
    await connection.rollback();
    res.status(500).json({ error: error.message });
  } finally {
    connection.release();
  }
});

export default app;
