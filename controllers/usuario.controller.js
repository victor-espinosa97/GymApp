const { Usuario, Rol } = require('../models');

const obtenerUsuarios = async( req, res = response ) => {

    try {
        const rows = await Usuario.findAll({include: [
            {
              model: Rol,
              as: 'rolAsociado',
              attributes: ['id','nombre'],
            }
          ]});
        res.render("usuarios/usuarios.ejs", { usuarios: rows });
    } catch (error) {
        console.log(error);
        
    }

}

const obtenerUsuario = async( req, res = response ) => {

    try {
        const { id } = req.params;
    
        const usuario = await Usuario.findByPk( id );
        if ( !usuario ) throw 'No existe un usuario con el id ' + id;

        res.render("usuarios/usuario_edit.ejs", { usuario });
        
    } catch (error) {
        console.log(error);
        const msg = (typeof error === 'string') ? error :'Error al cargar usuario';
        res.status(400).json({ ok:false, msg });
    }

}

const crearUsuario = async( req, res = response ) => {
    try {
        
        const { nombre, correo } = req.body;

        await Usuario.create({ nombre, correo });

        res.redirect("/dashboard/usuarios");
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

        res.redirect("/dashboard/usuarios");
    } catch (error) {
        console.log(error);
    }   
}


const deshabilitarUsuario = async( req, res = response ) => {
    try {

        const { id } = req.params;
    
        const usuario = await Usuario.findByPk( id );
        if ( !usuario ) throw 'No existe un Usuario con el id ' + id;
    
        await Usuario.destroy({ where: { id } });
        
        res.redirect("/dashboard/usuarios");
        
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