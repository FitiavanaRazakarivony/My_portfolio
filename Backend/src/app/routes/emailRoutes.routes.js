const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');

// Route pour envoyer un email
router.post('/send', emailController.sendEmail);

module.exports = router;
