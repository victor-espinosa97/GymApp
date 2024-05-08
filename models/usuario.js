const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection');
const Rol = require('./rol');

class Usuario extends Model {}

Usuario.init(
  {
    id:           { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre:       { type: DataTypes.STRING,  unique: true },
    correo:       { type: DataTypes.STRING,  allowNull: false },
    password:     { type: DataTypes.STRING,  allowNull: false },
    rol:          { type: DataTypes.INTEGER, references: { model: 'Rol', key: 'id' } },
  },
  {
    sequelize: db, 
    modelName: 'Usuario',
    tableName: 'usuarios', 
    timestamps: false 
  }
);

Usuario.belongsTo(Rol,       { foreignKey: 'rol', as: 'rolAsociado' });

module.exports = Usuario;
