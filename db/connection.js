const Sequelize = require('sequelize'); // [cite: 186]

const sequelize = new Sequelize({ // [cite: 187]
    dialect: 'sqlite', // [cite: 189]
    storage: './db/app.db' // [cite: 190]
});

module.exports = sequelize; // [cite: 191]