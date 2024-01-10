const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();
const config = require('../config');


const authenticate = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = decoded;
        next();
    });
};

// Contact Us
router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Save the contact form data (you may want to store this in a database)
        
        console.log('Contact Form Data:', { name, email, message });

        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error during contact form submission:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
