const mongoose = require('mongoose');

// // start building our schema

const gallerySchema = new mongoose.Schema({
    galleryName: { type: String, required: true },
    images: [{
        galleryItemURL: { type: String, required: true },
        galleryItemTitle: { type: String, required: true },
        galleryItemAlt: { type: String, required: true },
        id: { type: Number, required: true}
    }]
}
);

const homeScreenGallery = mongoose.model('homeScreenGallery', gallerySchema);

module.exports = homeScreenGallery;