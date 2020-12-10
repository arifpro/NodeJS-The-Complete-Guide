const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

module.exports = router;