//Importo funciones
const express = require('express');
const LibroController = require('../controllers/LibroController')
const router = express.Router();
const {middlewareBearer} = require('../middlewares/auth.js');

//Importo modelo de datos
const Controller = require('../controllers/LibroController');

// End-points CRUD libros
router.get('/', LibroController.getAll);
router.get('/:id', LibroController.getById);
router.get('/name/:title', LibroController.getByTitle);
router.post('/',middlewareBearer,  LibroController.create);
router.put('/:id',middlewareBearer, LibroController.update);
router.delete('/', middlewareBearer , LibroController.deleteAll);
router.delete('/:id', middlewareBearer, LibroController.delete);





module.exports = router;