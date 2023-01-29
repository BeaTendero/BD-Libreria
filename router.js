const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views

const UserRouter = require('./views/UserRouter');
const LibroRouter = require('./views/LibroRouter');
const PrestamoRouter = require('./views/PrestamoRouter');
const CategoryRouter = require ('./views/CategoryRouter')

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/libro', LibroRouter); //add auth
router.use('/categories',CategoryRouter);
router.use('/prestamo', PrestamoRouter)

module.exports = router;