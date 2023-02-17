var express = require('express');
const db = require('../models');
var router = express.Router();
const { Op } = require("sequelize");

/* GET users listing. */


router.get('/legendary', async function(req, res, next) {
  const test =  await db.Pokemon.findAll({
    where: {
      is_legendary: 1,
    }, 
    limit: 25 
  })
  res.send(test)
  console.log(req.body)
  
  
});

router.post('/*', async function(req, res, next) {
  const test = await db.Pokemon.findAll({
    limit: 25 
  })
   res.send(test)
   console.log(req.body, "here")
});

module.exports = router;
