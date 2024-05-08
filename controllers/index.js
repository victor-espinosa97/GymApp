const auth                          = require('./auth.controller');
const dashboard                     = require('./dashboard.controller');
const usuario                       = require('./usuario.controller');

module.exports = {
    ...auth,
    ...dashboard,
    ...usuario,
}