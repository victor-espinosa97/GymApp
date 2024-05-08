const { Router } = require('express');
const { 
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    deshabilitarUsuario, 
} = require('../controllers');
const { validaJWTUsuario } = require('../middlewares');
const router = Router();

/*
path:dashboard/usuarios
*/

router.get("/", validaJWTUsuario, obtenerUsuarios);
router.post("/add", validaJWTUsuario, crearUsuario);
router.get("/update/:id", validaJWTUsuario, obtenerUsuario);
router.post("/update/:id", validaJWTUsuario, actualizarUsuario);
router.get("/delete/:id", validaJWTUsuario, deshabilitarUsuario);

module.exports = router;
