const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');  // Add this line
const config = require('./config');  // Import config.js

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/auth'));  // Use require directly
app.use('/api', require('./routes/contact'));  // Use require directly

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
