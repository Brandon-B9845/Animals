var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(db)
  res.send('respond with a resource');
});

module.exports = router;
