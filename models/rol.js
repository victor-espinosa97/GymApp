const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection');

class Rol extends Model {}

Rol.init(
  {
    id:           { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre:       { type: DataTypes.STRING,  unique: true },
  },
  {
    sequelize: db, 
    modelName: 'Rol',
    tableName: 'roles', 
    timestamps: false 
  }
);

module.exports = Rol;
