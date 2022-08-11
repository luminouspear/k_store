require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes.js')
const galleryRoutes = require('./routes/galleryRoutes.js')
const cors = require('cors')


connectDB();

const app = express();

app.use(express.json());
app.use(cors())


//Any request going to server 5000 will have access through these routes.
app.get('/', (req, res) => {
    console.log(`API Running`);
  res.json({ message: "API Running"})
})

app.use('/api/products', productRoutes)
app.use('/api/gallery', galleryRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
