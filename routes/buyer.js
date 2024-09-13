const express = require('express');
const { searchProducts, addToCart } = require('../controllers/buyerController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/products', searchProducts);
router.post('/cart', authMiddleware, addToCart);

// Add routes for removing from the cart similarly

module.exports = router;
