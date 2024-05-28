const auth                          = require('./auth.controller');
const dashboard                     = require('./dashboard.controller');
const usuario                       = require('./usuario.controller');
const rutina                        = require('./rutina.controller');
const membresia                     = require('./membresia.controller');

module.exports = {
    ...auth,
    ...dashboard,
    ...membresia,
    ...usuario,
    ...rutina,
}