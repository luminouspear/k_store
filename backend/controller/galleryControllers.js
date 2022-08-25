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

const getGalleryDetails = async (req, res) => {
    try {
        const gallery = await Gallery.findOne({ galleryName: req.params.id });
        res.json(gallery);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getGallery,
    getGalleryDetails
};