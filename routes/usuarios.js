const { Router } = require('express');
const { 
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    deshabilitarUsuario, 
} = require('../controllers');
const { validaJWTUsuario, validateFields } = require('../middlewares');
const { check } = require('express-validator');
const router = Router();

/*
path:dashboard/usuarios
*/

router.get("/", validaJWTUsuario, obtenerUsuarios);

router.post("/agregar", [
    validaJWTUsuario,
    check('nombre', 'El nombre es obligatoria').not().isEmpty(),
    check('correo', 'El correo es obligatoria').isEmail(),
    validateFields
], crearUsuario);

router.get("/obtener/:id", validaJWTUsuario, obtenerUsuario);

router.post("/actualizar/:id", [
    validaJWTUsuario,
    check('nombre', 'El nombre es obligatoria').not().isEmpty(),
    check('correo', 'El correo es obligatoria').isEmail(),
    validateFields
], actualizarUsuario);

router.get("/eliminar/:id", validaJWTUsuario, deshabilitarUsuario);

module.exports = router;
