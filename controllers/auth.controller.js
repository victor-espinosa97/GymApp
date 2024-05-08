const { response } = require("express");
const bcryptjs = require('bcryptjs');

const { Usuario } = require('../models');
const { generateJWT, escribirDatos } = require('../helpers');

const loginUsuario = async(req, res = response)=>{
    try {
        const {correo, password} = req.body;

        const usuario = await Usuario.findOne({ where: { correo } });
        
        if(!usuario) throw 'Estas credenciales no validas.';
            
        //verificamos el password
        const valid_password = bcryptjs.compareSync(password, usuario.password);
        if(!valid_password) throw 'Estas credenciales no coinciden.';

        const token = await generateJWT(`${usuario.id}`, 'Clave.token');
        
        escribirDatos({ token,usuario });

        res.redirect("/dashboard");
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }   
}

const logoutUsuario = async(req, res = response)=>{
    try {
        escribirDatos({});

        res.redirect("/");
    } catch (error) {
        console.log(error);
        // res.redirect("/");
    }   
}

module.exports ={
    loginUsuario,
    logoutUsuario,
};