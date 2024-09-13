const pool = require('../config/db');

exports.addProduct = async (req, res) => {
  const { name, category, description, price, discount } = req.body;
  const seller_id = req.user.id; // JWT user ID
  try {
    const newProduct = await pool.query(
      `INSERT INTO products (seller_id, name, category, description, price, discount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [seller_id, name, category, description, price, discount]
    );
    res.json(newProduct.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product' });
  }
};

// Add methods for editing and deleting products similarly
