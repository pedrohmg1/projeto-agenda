const Sequelize = require('sequelize'); 
const db = require('../db/connection'); 

const Contato = db.define('contato', { 
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }, 
    nome: { type: Sequelize.STRING }, 
    idade: { type: Sequelize.INTEGER },
    empresa: { type: Sequelize.STRING }, 
    email: { type: Sequelize.STRING }, 
    createAt: { type: Sequelize.STRING }, 
    updateAt: { type: Sequelize.STRING } 
});

module.exports = Contato; 