const db = require('../db.js');
const Sequelize = require('sequelize');

const Contribution = db.define('contributions', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  address: Sequelize.STRING,
  zip: Sequelize.INTEGER,
  full_name: Sequelize.STRING,
  campaign_id: Sequelize.INTEGER,
  contributor_id: Sequelize.INTEGER,
  contributor_score: Sequelize.INTEGER
});

module.exports = Contribution;
