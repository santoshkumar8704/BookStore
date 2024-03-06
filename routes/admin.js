const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const product = require('../controllers/products')

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',product.getAddproduct );

// /admin/add-product => POST
router.post('/add-product', product.postProduct);

exports.routes = router;

