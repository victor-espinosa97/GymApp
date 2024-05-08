const { Sequelize } = require('sequelize');

const db_host = 'srv739.hstgr.io';
const db_name = 'u682918137_gym_app';
const db_user = 'u682918137_user_gym_app';
const db_pass = 'User.Gym.2024';

const db = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: 'mysql',
    logging: false,
    // logging: console.log,
});

module.exports = db;
