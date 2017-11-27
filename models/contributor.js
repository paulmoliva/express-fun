const db = require('../db.js');
const Sequelize = require('sequelize');

const Contributor = db.define('contributors', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  address: Sequelize.STRING,
  zip: Sequelize.INTEGER,
  full_name: Sequelize.STRING,
  score: Sequelize.INTEGER,
  avg_score: Sequelize.INTEGER,
  avg_donation: Sequelize.INTEGER,
  total: Sequelize.INTEGER,
  is_person: Sequelize.BOOLEAN,
  add_to_score: Sequelize.INTEGER
});

module.exports = Contributor;
