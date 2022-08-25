const express = require('express');
const router = express.Router();

const { getGallery, getGalleryDetails } = require('../controller/galleryControllers');


// @desc    GET all products from db
// @route   GET /api/products
// @access  Public

router.get('/', getGallery)

// @desc    GET a product by id from db
// @route   GET /api/products
// @access  Public

router.get('/:id', getGalleryDetails)

module.exports = router;