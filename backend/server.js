require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes.js')
const galleryRoutes = require('./routes/galleryRoutes.js')
const faqRoutes = require('./routes/faqRoutes.js')
const cors = require('cors')


connectDB();

const app = express();

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


//Any request going to server 5005 will have access through these routes.
app.get('/', (req, res) => {
    console.log(`API Running`);
  res.json({ message: "API Running"})
})

app.use(path = '/api/faqs', faqRoutes)
app.use(path = '/api/gallery', galleryRoutes)
app.use(path = '/api/products', productRoutes)

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
