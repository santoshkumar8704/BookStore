const path = require('path');

const express = require('express');

const product = require('../controllers/products')
const adminData = require('./admin');

const router = express.Router();

router.get('/', product.displayProduct);

module.exports = router;
