// Import the dotenv package
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/car_selling_app',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
};
