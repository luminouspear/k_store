const express = require('express');
const router = express.Router();

const { getGallery } = require('../controller/galleryControllers');


// @desc    GET all products from db
// @route   GET /api/products
// @access  Public

router.get('/', getGallery)

// @desc    GET a product by id from db
// @route   GET /api/products
// @access  Public

// router.get('/:id', getProductById)

module.exports = router;