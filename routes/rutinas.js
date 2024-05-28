const { Router } = require('express');
const router = Router();
const {mostrarRutinas} = require('../controllers')
const {validaJWTUsuario} = require('../middlewares');
// Ruta para mostrar las rutinas
router.get("/", validaJWTUsuario, mostrarRutinas);

module.exports = router;