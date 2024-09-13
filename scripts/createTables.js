const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();
// import cs from '../scripts/ca.pem'
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, '../scripts/ca.pem')).toString(),
    rejectUnauthorized: true
  }
});

const createTables = async () => {
  try {
    const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await pool.query(sql);
    console.log('Tables created successfully.');
  } catch (err) {
    console.error('Error creating tables:', err);
  } finally {
    pool.end();
  }
};

createTables();
