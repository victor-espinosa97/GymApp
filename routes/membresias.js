const { Router } = require('express');
const { renderPaginaMembresias, guardarMembresia, renderListMembresias, actualizarMembresia, obtenerMembresia, renderTableMembresias } = require('../controllers');
const { validaJWTUsuario, validateFields } = require('../middlewares');
const { check } = require('express-validator');
const router = Router();

/*
path:dashboard/membresias
*/

router.get("/membresiasTable", validaJWTUsuario ,renderTableMembresias);
router.get("/obtenerMembresia/:id", validaJWTUsuario ,obtenerMembresia);
router.get("/membresiaList", validaJWTUsuario ,renderListMembresias);
router.get("/", validaJWTUsuario ,renderPaginaMembresias);
router.post('/guardarMembresia', validaJWTUsuario,
    check('usuario', 'El nombre es obligatoria'),
    check('fechaInicio', 'El nombre es obligatoria'),
    check('fechaFinal', 'El nombre es obligatoria'),
    check('tipoMembresia', 'El nombre es obligatoria'),
    check('dias', 'El nombre es obligatoria'),
    check('fecha', 'El nombre es obligatoria'),
    check('claseDia', 'El nombre es obligatoria'),
    check('valorMen', 'El nombre es obligatoria'),
    check('valorTik', 'El nombre es obligatoria'),
    check('valorCls', 'El nombre es obligatoria'),
guardarMembresia);
router.post('/actualizarMembresia/:id', validaJWTUsuario,
    check('tipoMembresia', 'El nombre es obligatoria'),
    check('fechaInicio', 'El nombre es obligatoria'),
    check('fechaFin', 'El nombre es obligatoria'),
    check('dias', 'El nombre es obligatoria'),
    check('valor', 'El nombre es obligatoria'),
actualizarMembresia);

module.exports = router;
