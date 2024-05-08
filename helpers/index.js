const funciones_json                = require('./funciones_json');
const jwt                           = require('./jwt');

module.exports = {
    ...funciones_json,
    ...jwt,
}