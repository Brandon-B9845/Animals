var express = require('express');
const db = require('../models');
var router = express.Router();
const { Op } = require("sequelize");

/* GET users listing. */


router.post('/defense_desc', async function(req, res, next) {
  let pageNumber = JSON.parse(Object.keys(req.body)[0])['page-number']
  let offSetNumber=  pageNumber * 25
  
  const test =  await db.Pokemon.findAll({
    order: [
      ['defense', 'DESC'],

    ],
    limit: 25,
    offset: offSetNumber
  })
  res.send(test)
 

  
  
});


router.post('/defense_asc', async function(req, res, next) {
  let pageNumber = JSON.parse(Object.keys(req.body)[0])['page-number']
  let offSetNumber=  pageNumber * 25
  
  const test =  await db.Pokemon.findAll({
    order: [
      ['defense', 'ASC'],

    ],
    limit: 25,
    offset: offSetNumber
  })
  res.send(test)
 

  
  
});


router.post('/attack_desc', async function(req, res, next) {
  let pageNumber = JSON.parse(Object.keys(req.body)[0])['page-number']
  let offSetNumber=  pageNumber * 25
  
  const test =  await db.Pokemon.findAll({
    order: [
      ['attack', 'DESC'],

    ],
    limit: 25,
    offset: offSetNumber
  })
  res.send(test)
 

  
  
});

router.post('/attack_asc', async function(req, res, next) {
  let pageNumber = JSON.parse(Object.keys(req.body)[0])['page-number']
  let offSetNumber=  pageNumber * 25
  
  const test =  await db.Pokemon.findAll({
    order: [
      ['attack', 'ASC'],

    ],
    limit: 25,
    offset: offSetNumber
  })
  res.send(test)
 
  
  
});

router.post('/legendary', async function(req, res, next) {
  let pageNumber = JSON.parse(Object.keys(req.body)[0])['page-number']
  let offSetNumber=  pageNumber * 25
  
  const test =  await db.Pokemon.findAll({
    where: {
      is_legendary: 1,
    }, 
    limit: 25,
    offset: offSetNumber
  })
  res.send(test)

  
  
});

router.post('/*', async function(req, res, next) {
  let pageNumber = JSON.parse(Object.keys(req.body)[0])['page-number']
  let offSetNumber=  pageNumber * 25
  
  const test = await db.Pokemon.findAll({
    limit: 25,
    offset: offSetNumber
  })
   res.send(test)
  
  
    
   
});



module.exports = router;
