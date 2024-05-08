const { response } = require("express");
const { Usuario } = require('../models');
const { checkJWT, leerDatos, escribirDatos } = require('../helpers');

const validaJWTUsuario = async(req, res = response, next)=>{
    
    try {
        // Leer datos desde el archivo JSON
        const datosLeidos = leerDatos();
        // console.log('Datos leídos:', datosLeidos);
        const token = datosLeidos.token;
        if(!token) throw "No hay un token en la petición.";
        
        const { id } = await checkJWT(token);
        if(!id) throw "Token invalido.";

        const usuarioAuth = await Usuario.findByPk(id);
        if(!usuarioAuth) throw "Token no valido.";
        
        req.usuarioAuth = usuarioAuth;
        next();
    } catch (error) {
        console.log(error);
        escribirDatos({});
        res.redirect("/");
    }
}

module.exports = {
    validaJWTUsuario
}
