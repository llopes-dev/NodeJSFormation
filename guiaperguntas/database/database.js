const Sequelize = require ('sequelize');
const connection = new Sequelize ('guiaperguntas' , 'root' , '135790' , {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;