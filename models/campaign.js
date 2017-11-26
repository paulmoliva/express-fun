const db = require('../db.js');
const Sequelize = require('sequelize');

const Campaign = db.define('campaigns', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: Sequelize.STRING,
  leans: Sequelize.INTEGER
});

module.exports = Campaign;
