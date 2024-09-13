
const express = require('express');
const { addProduct } = require('../controllers/sellerController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/product', authMiddleware, addProduct);

// Add routes for editing and deleting products similarly

module.exports = router;
