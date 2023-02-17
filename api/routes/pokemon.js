var express = require('express');
const db = require('../models');
var router = express.Router();
const { Op } = require("sequelize");

/* GET users listing. */
router.get('/', function(req, res, next) {
  const test = db.Pokemon.findAll()
   let anotherTest = test.then((data) => {return res.send(data)})
   console.log(anotherTest)
});

module.exports = router;
