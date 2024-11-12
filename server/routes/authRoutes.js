const express = require('express');
const { registerUser, loginUser, getHome } = require('../controllers/authController');
const router = express.Router();

// Home route
router.get('/home', getHome);

// Register routes
router.get('/register', (req, res) => res.render('register'));
router.post('/register', registerUser);

// Login routes
router.get('/login', (req, res) => res.render('login'));
router.post('/login', loginUser);

module.exports = router;
