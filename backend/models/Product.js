 const mongoose = require('mongoose');

// // start building our schema

const productSchema = new mongoose.Schema({
    itemTitle: {
        type: String,
        required: true
    },
    itemAlt: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    },
    itemPrice: {
        type: String,
        required: true
    },
    flPrice: {
        type: Number,
        required: true
    },
    productUrl: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    images: [{
        imageUrl: { type: String, required: true },
        imageTitle: { type: String, required: true },
        imageAlt: { type: String, required: true },
        id: {type: Number, required: true}
    }],
    id: {
        type: Number,
        required: true
    },
        _id: Object
}
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;