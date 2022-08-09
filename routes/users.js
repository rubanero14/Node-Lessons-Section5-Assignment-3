const path = require('path');
const express = require('express');
const rootDirectory = require('../util/path');

const router = express.Router();

router.get('/users', (req, res, next) => {
    const HomePage = path.join(rootDirectory,'views','Users.html');
    res.sendFile(HomePage);
});

module.exports = router;