const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req, res) => res.render('login'));

//register page
router.get('/register', (req, res) => res.render('register'));

//register page
router.get('/dashboard', (req, res) => res.render('dashboard'));


module.exports = router; 