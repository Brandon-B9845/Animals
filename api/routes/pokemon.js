var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const test = db.Pokemon.findAll({
  where: {
    pokedex_number: 5
  }
  })
  test.then(data => console.log(data))
});

module.exports = router;
