const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('welcome to node passport login'));

module.exports = router;  