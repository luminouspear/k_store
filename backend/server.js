require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes.js')
const galleryRoutes = require('./routes/galleryRoutes.js')
const faqRoutes = require('./routes/faqRoutes.js')
const cors = require('cors')
const path = require('path');


connectDB();

const app = express();

app.use(express.json());
app.use(cors())

console.log('Process node env value:', process.env.NODE_ENV)
app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://simcoestitchcraft.com');
  const allowedOrigins = ['http://simcoestitchcraft.com', 'http://localhost:5005'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'public', 'build')));



//Any request going to server 5005 will have access through these routes.
app.get('/', (req, res) => {
    console.log(`API Running`);
  res.json({ message: "API Running"})
})

app.use('/api/faqs', faqRoutes)
app.use('/api/gallery', galleryRoutes)
app.use('/api/products', productRoutes)

// Return the main index.html file for all other requests
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,  'public', 'build', 'index.html'));
});


const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
