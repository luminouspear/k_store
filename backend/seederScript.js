require('dotenv').config();

const productsData = require('./data/products');
const galleryData = require('./data/gallery');
const faqData = require('./data/FAQ')
const connectDB = require('./config/db');
const Product = require('./models/Product');
const Gallery = require('./models/Gallery')
const FAQ = require('./models/FAQ')


connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({})
        await Gallery.deleteMany({})
        await FAQ.deleteMany({})
        await Product.insertMany(productsData)
        await Gallery.insertMany(galleryData)
        await FAQ.insertMany(faqData)



        console.log("Data Import Success")

        process.exit();

    } catch (error) {
        console.error(`Error with data import\n${error}`);
        process.exit(1);
    }
};

importData();