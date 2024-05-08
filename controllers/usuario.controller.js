const { Usuario } = require('../models');

const obtenerUsuarios = async( req, res = response ) => {

    try {
        const rows = await Usuario.findAll();
        res.render("usuarios/usuarios", { usuarios: rows });
    } catch (error) {
        console.log(error);
        
    }

}

const obtenerUsuario = async( req, res = response ) => {

    try {
        const { id } = req.params;
    
        const usuario = await Usuario.findByPk( id, {
            attributes: { exclude: ['password'] }
        });
        if ( !usuario ) throw 'No existe un Usuario con el id ' + id;

        res.render("usuarios/usuario_edit", {  usuario });
        
    } catch (error) {
        console.log(error);
        const msg = (typeof error === 'string') ? error :'Error al cargar usuario';
        res.status(400).json({ ok:false, msg });
    }

}

const crearUsuario = async( req, res = response ) => {
    try {
        
        const { nombre, correo } = req.body;


        await Usuario.create({
            nombre,
            correo,
        });

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }

}

const actualizarUsuario = async( req, res = response ) => {
    try {

        const { id:userId }   = req.params;
        const { nombre, correo } = req.body;
        
        let newData;
        newData = { nombre, correo };

        const currentUsuario = await Usuario.findByPk( userId);

        if ( !currentUsuario ) throw 'No existe un usuario con el id ' + userId;
        
        await currentUsuario.update( { ...newData } );

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }   
}


const deshabilitarUsuario = async( req, res = response ) => {
    try {

        const { id } = req.params;
    
        const usuario = await Usuario.findByPk( id );
        if ( !usuario ) throw 'No existe un Usuario con el id ' + id;
    
        await usuario.update({ estado: false });
        if (result.affectedRows === 1) {
            res.json({ message: "usuario eliminado" });
        }
        res.redirect("/");
        
    } catch (error) {
        console.log(error);
    }

}

module.exports ={
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    deshabilitarUsuario,
};