const { Router } = require('express');
const { renderPaginaPrincipal } = require('../controllers');
const { validaJWTUsuario } = require('../middlewares');
const router = Router();

/*
path:dashboard/
*/

router.get("/", validaJWTUsuario ,renderPaginaPrincipal);

module.exports = router;
