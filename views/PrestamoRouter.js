const express = require('express');
const PrestamoControllers = require ('../controllers/PrestamoController');
const router = express.Router();
const {middlewareBearer} = require('../middlewares/auth');

router.post('/create',middlewareBearer, PrestamoControllers.createPrestamo);

module.exports = router; 