const mongoose = require('mongoose');

// // start building our schema

const faqSchema = new mongoose.Schema({
    faqQuestionHeader: { type: String, required: true },
    faqAnswer: { type: String, required: true },
    id: {type: Number, required: true }
}
);

const faqData = mongoose.model('faqData', faqSchema);

module.exports = faqData;