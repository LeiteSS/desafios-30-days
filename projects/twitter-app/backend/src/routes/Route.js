const express = require("express");
const router = express.Router();
const fs = require('fs');
const postRoutes = require('./Posts');

router.use(postRoutes);

module.exports = router;