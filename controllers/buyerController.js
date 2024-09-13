const pool = require('../config/db');

exports.searchProducts = async (req, res) => {
  const { query } = req.query;
  try {
    const products = await pool.query(
      `SELECT * FROM products WHERE name ILIKE $1 OR category ILIKE $2`,
      [`%${query}%`, `%${query}%`]
    );
    res.json(products.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error searching products' });
  }
};

exports.addToCart = async (req, res) => {
  const { product_id } = req.body;
  const buyer_id = req.user.id; // JWT user ID
  try {
    await pool.query(
      `INSERT INTO cart (buyer_id, product_id) VALUES ($1, $2)`,
      [buyer_id, product_id]
    );
    res.json({ message: 'Product added to cart' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart' });
  }
};

// Add methods for removing from the cart similarly
