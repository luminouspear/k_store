const FAQ = require('../models/FAQ')

const getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find({})
        res.json(faqs)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error in faqControllers.js" })
    }
}

module.exports = {
    getFAQs
}