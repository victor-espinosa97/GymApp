const valida_jwt_usuario            = require('./valida_jwt_usuario');
const validate_fields               = require('./validate_fields');

module.exports = {
    ...valida_jwt_usuario,
    ...validate_fields,
}