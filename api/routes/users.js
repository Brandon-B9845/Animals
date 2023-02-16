var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let poke = await db.Pokemon.findAll({
    where: {
      pokedex_number: 3
    }
  })

  console.log('dun found it')
  console.log(poke[0].dataValues)

  res.send('respond with a resource');
});

module.exports = router;
