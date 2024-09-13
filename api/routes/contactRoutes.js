const express = require('express');
const { contactFormHandler } = require('../controllers/contactController');

const router = express.Router();

// POST /api/contact - handle contact form submission
router.post('/contact', contactFormHandler);

module.exports = router;
