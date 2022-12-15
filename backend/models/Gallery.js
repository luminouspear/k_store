const mongoose = require('mongoose');

// // start building our schema

const gallerySchema = new mongoose.Schema({
    galleryName: { type: String, required: true },
    galleryDescription: { type: String },
    galleryLength: {type: Number },
    images: [{
        galleryItemURL: { type: String, required: true },
        galleryItemTitle: { type: String, required: true },
        galleryItemAlt: { type: String, required: true },
        id: { type: Number, required: true}
    }]
}
);

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;