 const mongoose = require('mongoose');

// // start building our schema

const productImageSchema = new mongoose.Schema({
    imageUrl: { type: String },
    imageTitle: { type: String },
    imageAlt: { type: String },
    id: { type: Number }
})

const productSchema = new mongoose.Schema({
  itemTitle: { type: String },
  itemAlt: { type: String },
  itemDescription: { type: String },
  itemSize: { type: String },
  itemCredit: { type: String },
  status: { type: String },
  quantity: { type: Number },
  itemPrice: { type: Number },
  shippingPrice: { type: Number },
  productUrl: { type: String },
  imageUrl: { type: String },
  images: [productImageSchema],
  galleryId: { type: String },
  galleryTotal: { type: Number },
  id: { type: Number }
});



// Old product schema
// const productSchema = new mongoose.Schema({
//     itemTitle: {
//         type: String,
//         required: true
//     },
//     itemAlt: {
//         type: String,
//         required: true
//     },
//     itemDescription: {
//         type: String,
//         required: true
//     },
//     itemPrice: {
//         type: String,
//         required: true
//     },
//     flPrice: {
//         type: Number,
//         required: true
//     },
//     productUrl: {
//         type: String,
//         required: true
//     },
//     imageUrl: {
//         type: String,
//         required: true
//     },
//     images: [{
//         imageUrl: { type: String, required: true },
//         imageTitle: { type: String, required: true },
//         imageAlt: { type: String, required: true },
//         id: {type: Number, required: true}
//     }],
//     id: {
//         type: Number,
//         required: true
//     },
//         _id: Object
// }
// );

const Product = mongoose.model('product', productSchema);

module.exports = Product;