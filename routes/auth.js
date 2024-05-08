const { Router } = require('express');
const { check } = require('express-validator');

const { loginUsuario, logoutUsuario } = require('../controllers');
const { validateFields } = require('../middlewares');

const router = Router();
/*
path:auth/
*/

router.post('/',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateFields
], loginUsuario); 

router.get('/logout',[
], logoutUsuario); 


module.exports = router;
