const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Enable SSL for Aiven
});

console.log("db connected")

module.exports = pool;
