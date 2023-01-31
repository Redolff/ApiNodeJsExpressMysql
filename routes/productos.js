const express = require('express');
const router = express.Router();
const controller = require('../controllers/productosController.js');

router.get('/productos', controller.getAll);

router.get('/productos/:id', controller.getById);

module.exports = router;