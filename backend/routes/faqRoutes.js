const express = require('express');
const router = express.Router();

const { getFAQs } = require('../controller/faqControllers');


// @desc    GET all products from db
// @route   GET /api/faqs
// @access  Public

router.get('/', getFAQs)

// @desc    GET a product by id from db
// @route   GET /api/products
// @access  Public

// router.get('/:id', getProductById)

module.exports = router;