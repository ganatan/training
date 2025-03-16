import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Trustno1',
  database: process.env.DB_NAME || 'backend_node_javascript',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const getItems = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM person');

    return rows;
  } catch (error) {
    console.error(`Database error: ${error.message}`);

    return [];
  }
};

const app = express();

app.get('/persons', async (req, res) => {
  const items = await getItems();
  res.json(items);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
