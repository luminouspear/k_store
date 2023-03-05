const io = require('socket.io-client')
const Product = require('../models/Product');
const socket = io('http://localhost:5005')


const getProducts = async (req, res) => {
    console.log('getProducts running in productControllers.js')
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" });
    }
};

const getProductById = async (req, res) => {
    try {
        // const product = await Product.findById(req.params.id);
        const product = await Product.findOne({productUrl: req.params.id})
        res.json(product);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" });
    }
};

const updateProductQuantity = async (req, res) => {

    const { id } = req.params;
    console.log('id: ', id);
    const { quantity } = req.body;
    console.log('quantity: ', quantity);

    try {
        const product = await Product.findById(id);;

        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }

        product.quantity -= quantity;

        const updatedProduct = await product.save();

        socket.emit('quantityUpdated', updatedProduct)

        res.json(updatedProduct);

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error in updateProductQuantity" });
    }

}

module.exports = {
    getProducts,
    getProductById,
    updateProductQuantity
};