const Gallery = require('../models/Gallery');

const getGallery = async (req, res) => {
    console.log(`getGallery running in galleryControllers.js`);
    try {
        const gallery = await Gallery.find({});
        res.json(gallery);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error in galleryControllers.js" });
    }
};

// const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         res.json(product);
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ message: "Server error" });
//     }
// };

module.exports = {
    getGallery
    // getProductById
};