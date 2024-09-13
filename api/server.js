const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();

// Enable CORS for your frontend domains (include both development and production)
app.use(cors({
  origin: ['http://localhost:3000', 'https://next-18protein.jpn.org'] // List all origins that should be allowed
}));

app.use(express.json());
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
