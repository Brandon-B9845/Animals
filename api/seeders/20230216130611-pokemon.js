'use strict';
var _ = require('lodash')
const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const { parse } = require("csv-parse")
const db = require('../models')



// function pleaseWork(){
//   const results = []
//   fs.createReadStream('pokemon.csv')
//   .pipe(csv({}))
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results)
//   })

// }

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {

    return new Promise(() => {
      console.log("made it")
      fs.createReadStream(path.join(__dirname, 'data', 'pokemon.csv')).pipe(parse({}, function (err, data) {
        db.Pokemon.bulkCreate(
          _.map(data, function (record, index) {
            // if (index === 0){
            //   return
            // }
            if (record[32] == 'null' || record[32] == null){
              console.log(index)
              console.log(record[32])
              console.log(typeof record[32])
            }
            return {
              'abilities': record[0] === 'null' ? null : record[0],
              'against_bug': record[1] === 'null' ? null : parseFloat(record[1]),
              'against_dark': record[2] === 'null' ? null :  parseFloat(record[2]),
              'against_dragon':record[3] === 'null' ? null :  parseFloat(record[3]),
              'against_electric':record[4] === 'null' ? null :  parseFloat(record[4]),
              'against_fairy':record[5] === 'null' ? null :  parseFloat(record[5]),
              'against_fight':record[6] === 'null' ? null :  parseFloat(record[6]),
              'against_fire': record[7] === 'null' ? null : parseFloat(record[7]),
              'against_flying': record[8] === 'null' ? null : parseFloat(record[8]),
              'against_ghost': record[9] === 'null' ? null : parseFloat(record[9]),
              'against_grass': record[10] === 'null' ? null : parseFloat(record[10]),
              'against_ground': record[11] === 'null' ? null : parseFloat(record[11]),
              'against_ice': record[12] === 'null' ? null : parseFloat(record[12]),
              'against_normal': record[13] === 'null' ? null : parseFloat(record[13]),
              'against_poison': record[14] === 'null' ? null : parseFloat(record[14]),
              'against_psychic': record[15]=== 'null' ? null : parseFloat(record[15]),
              'against_rock' : record[16] === 'null' ? null : parseFloat(record[16]),
              'against_steel': record[17] === 'null' ? null : parseFloat(record[17]),
              'against_water': record[18] === 'null' ? null : parseFloat(record[18]),
              'attack': record[19] === 'null' ? null : parseInt(record[19]),
              'base_egg_steps': record[20] === 'null' ? null : parseInt(record[20]),
              'base_happiness': record[21] === 'null' ? null : parseInt(record[21]),
              'base_total': record[22] === 'null' ? null : parseInt(record[22]),
              'capture_rate': record[23] === 'null' ? null : parseInt(record[23]),
              'classification': record[24] === 'null' ? null : record[24],
              'defense': record[25] === 'null' ? null : parseInt(record[25]),
              'experience':record[26] === 'null' ? null :  parseInt(record[26]),
              'height_m':record[27] === 'null' ? null :  parseFloat(record[27]),
              'hp': record[28] === 'null' ? null : parseInt(record[28]),
              'japanses_name': record[29] === 'null' ? null : record[29],
              'name':record[30] === 'null' ? null : record[30],
              'percentage_male':record[31] === 'null' ? null :  parseFloat(record[31]),
              'pokedex_number': parseInt(record[32]),
              'sp_attack':record[33] === 'null' ? null :  parseInt(record[33]),
              'sp_defense': record[34] === 'null' ? null : parseInt(record[34]),
              'speed':record[35] === 'null' ? null :  parseInt(record[35]),
              'type1':record[36] === 'null' ? null :  record[36],
              'type2': record[37] === 'null' ? null : record[37],
              'weight_kg': record[38] === 'null' ? null : parseFloat(record[38]),
              'generation': record[39] === 'null' ? null : parseInt(record[39]),
              'is_legendary': record[40] === 'null' ? null : parseInt(record[40])

            }
          })
        );
      }
      ));
    })





    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
