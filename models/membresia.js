const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection');
const Usuario = require('./usuario');

class Membresia extends Model {}

Membresia.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    usuario: { type: DataTypes.INTEGER, references: { model: 'Usuario', key: 'id' } },
    tipo_membresia: { type: DataTypes.STRING,  allowNull: false },
    fecha_inicio: { type: DataTypes.DATE, allowNull: false},
    fecha_fin: { type: DataTypes.DATE, allowNull: false},
    dias_habiles: { type: DataTypes.INTEGER, default: 0},
    valor_pagado: { type: DataTypes.FLOAT, default: 0}
  },
  {
    sequelize: db,
    modelName: 'Membresia',
    tableName: 'menbresias',
    timestamps: false
  }
);

Membresia.belongsTo(Usuario, { foreignKey: 'usuario', as: 'usuarioAsociado' });

module.exports = Membresia;
