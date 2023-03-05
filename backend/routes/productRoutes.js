const express = require('express');
const router = express.Router();

const { getProducts, getProductById, updateProductQuantity } = require('../controller/productControllers');


// @desc    GET all products from db
// @route   GET /api/products
// @access  Public

router.get('/', getProducts)

// @desc    GET a product by id from db
// @route   GET /api/products
// @access  Public

router.get('/:id', getProductById)

// @desc Update a product's quantity in the db
// @route PUT /api/products/:id
// @access Public

router.put('/:id', updateProductQuantity)

module.exports = router;