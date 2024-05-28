const { Membresia } = require('../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models/rol');

const renderTableMembresias = async (req, res) => {
  try {
    const usuarios = await sequelize.query(`
    SELECT
      m.id,
      u.nombre as usuario,
      u.correo as correo,
      m.tipo_membresia as tipoMembresia,
      m.fecha_inicio as fechaInicio,
      m.fecha_fin as fechaFin,
      m.valor_pagado as valor,
      m.dias_habiles as dias
    FROM usuarios as u
    JOIN menbresias m on u.id = m.usuario`,
        {type: QueryTypes.SELECT});

    res.render('menbresias/membresiasTable', { usuarios });
  } catch (error) {
    res.status(500).send(error);
  }
};

const renderPaginaMembresias = async (req, res) => {
  try {
    const usuarios = await sequelize.query('SELECT u.id as id, u.nombre as nombre FROM usuarios as u LEFT JOIN menbresias m on u.id = m.usuario WHERE m.id IS NULL',
        {type: QueryTypes.SELECT});

    res.render('menbresias/membresias', { usuarios });
  } catch (error) {
    res.status(500).send(error);
  }
};

const renderListMembresias = async (req, res) => {
    try {
      const usuarios = await sequelize.query(`
      SELECT
        m.id,
        u.nombre as usuario,
        u.correo as correo,
        m.tipo_membresia as tipoMembresia,
        m.fecha_inicio as fechaInicio,
        m.fecha_fin as fechaFin,
        m.valor_pagado as valor,
        m.dias_habiles as dias
      FROM usuarios as u
      JOIN menbresias m on u.id = m.usuario`,
          {type: QueryTypes.SELECT});

      res.render('menbresias/membresiasList', { usuarios });
    } catch (error) {
      res.status(500).send(error);
    }
  };

const guardarMembresia = async (req, res) => {
    try {
      const {
        usuario,
        tipoMembresia,
        mensualidadFechaInicio,
        mensualidadFechaFinal,
        mensualidadDias,
        ticketFechaInicio,
        ticketFechaFinal,
        ticketDias,
        claseFecha,
        valorMen,
        valorTik,
        valorCls,
        claseDia } = req.body;

      let membresiaData = {
        usuario: usuario,
        tipo_membresia: tipoMembresia,
        fecha_inicio: null,
        fecha_fin: null,
        dias_habiles: null,
        valor_pagado: 0,
      };


      if (tipoMembresia === 'mensualidad') {
        membresiaData.fecha_inicio = new Date(mensualidadFechaInicio);
        membresiaData.fecha_fin = new Date(mensualidadFechaFinal);
        membresiaData.dias_habiles = parseInt(mensualidadDias);
        membresiaData.valor_pagado = parseInt(valorMen);
      } else if (tipoMembresia === 'ticket') {
        membresiaData.fecha_inicio = new Date(ticketFechaInicio);
        membresiaData.fecha_fin = new Date(ticketFechaFinal);
        membresiaData.dias_habiles = parseInt(ticketDias);
        membresiaData.valor_pagado = parseInt(valorTik);
      } else if (tipoMembresia === 'clase') {
        membresiaData.fecha_inicio = new Date(claseFecha);
        membresiaData.fecha_fin = new Date(claseFecha);
        membresiaData.dias_habiles = parseInt(claseDia);
        membresiaData.valor_pagado = parseInt(valorCls);
      }

      const nuevaMembresia = new Membresia(membresiaData);

      await nuevaMembresia.save();
      res.redirect("/dashboard/membresias");
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al guardar la membresía');
    }
  };

  const obtenerMembresia = async( req, res = response ) => {

    try {
      const { id } = req.params;

        const [membresia] = await sequelize.query(`
          SELECT
            m.id,
            u.nombre as usuario,
            m.tipo_membresia as tipoMembresia,
            m.fecha_inicio as fechaInicio,
            m.fecha_fin as fechaFin,
            m.valor_pagado as valor,
            m.dias_habiles as dias
          FROM usuarios as u
          JOIN menbresias m on u.id = m.usuario
          WHERE m.id = ${id}
          LIMIT 1`,
          {type: QueryTypes.SELECT});

        if ( !membresia ) {
          throw 'No existe una membresia con el id ' + id;
        }

        res.render("menbresias/membresiaEdit", { membresia });
    } catch (error) {
        console.log(error);
        const msg = (typeof error === 'string') ? error :'Error al cargar la membresia';
        res.status(400).json({ ok:false, msg });
    }

}

const actualizarMembresia = async( req, res = response ) => {
  try {

      const { id }   = req.params;

      const { tipoMembresia, fechaInicio, fechaFin, dias, valor } = req.body;

      const newFechaFin = tipoMembresia === 'clase' ? fechaInicio : fechaFin;

      const newData = {
        tipo_membresia: tipoMembresia,
        fecha_inicio: fechaInicio,
        fecha_fin: newFechaFin,
        dias_habiles: dias,
        valor_pagado: valor,
      };

      const membresia = await Membresia.findByPk( id);

      if ( !membresia ) throw 'No existe una membresia con el id ' + id;

      await membresia.update( { ...newData } );

      res.redirect('/dashboard/membresias/membresiaList');
  } catch (error) {
      console.log(error);
  }
}

module.exports ={
    renderPaginaMembresias,
    guardarMembresia,
    renderListMembresias,
    obtenerMembresia,
    actualizarMembresia,
    renderTableMembresias,
};