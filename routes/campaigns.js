const express = require('express');
const router = express.Router();
const Campaign = require('../models/campaign.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Campaign.findAll({
    attributes: ['id', 'name']
  }).then( campaigns => {
    res.send(JSON.stringify(campaigns));
  })
});

module.exports = router;
