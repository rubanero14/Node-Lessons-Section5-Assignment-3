const path = require('path');
const express = require('express');
const rootDirectory = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    const HomePage = path.join(rootDirectory,'views','Home.html');
    res.sendFile(HomePage);
});

module.exports = router;