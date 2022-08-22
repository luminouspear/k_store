require('dotenv').config();

const productsData = require('./data/products');
const homeScreenGalleryData = require('./data/gallery');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const homeScreenGallery = require('./models/Gallery')

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({})
        await homeScreenGallery.deleteMany({})
        await Product.insertMany(productsData)
        await homeScreenGallery.insertMany(homeScreenGalleryData)


        console.log("Data Import Success")

        process.exit();

    } catch (error) {
        console.error(`Error with data import\n${error}`);
        process.exit(1);
    }
};

importData();