'use strict';
var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  csv = require('csv')

  const db = "../models"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log("made it")
    fs.createReadStream(path.join(__dirname, 'data', 'pokemon.csv')).pipe(csv.parse({}, function (err, data) {
      console.log("made it 1")
      Sequelize.Pokemon.bulkCreate(
        _.map(data, function (record, index) {
          return {
            'abilities': record[0],
            'against_bug': record[1],
            'against_dark': record[2],
            'against_dragon': record[3],
            'against_electric': record[4],
            'against_fairy': record[5],
            'against_fight': record[6], 
            'against_fire': record[7], 
            'against_flying': record[8],
            'against_ghost': record[9], 
            'against_grass': record[10], 
            'against_ground': record[11],
            'against_ice': record[12], 
            'against_normal': record[13], 
            'against_poison': record[14],
            'against_psychic': record[15], 
            'against_rock': record[16], 
            'against_steel': record[17],
            'against_water': record[18], 
            'attack': record[19], 
            'base_egg_steps': record[20],
            'base_happiness': record[21], 
            'base_total': record[22], 
            'capture_rate': record[23],
            'classification': record[24], 
            'defense': record[25], 
            'experience_growth': record[26],
            'height_m': record[27], 
            'hp': record[28], 
            'japanses_name': record[29],
            'name': record[30], 
            'percentage_male': record[31], 
            'pokedex_number': record[32],
            'sp_attack': record[33], 
            'sp_defense': record[34], 
            'speed': record[35],
            'type1': record[36], 
            'type2': record[37], 
            'weight_kg': record[38],
            'generation': record[39], 
            'is_legendary': record[40]  

          }
        })
      );
    }
    ));

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
