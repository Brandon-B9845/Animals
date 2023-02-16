function Pokemon(sequelize, DataTypes) {

    const pokemon = sequelize.define('Pokemon', {
        // Model attributes are defined here
        abilities: {
            type: DataTypes.STRING,
        },
        against_bug: {
            type: DataTypes.FLOAT
        },
        against_dark: {
            type: DataTypes.FLOAT
        },
        against_dragon: {
            type: DataTypes.FLOAT
        },
        against_electric: {
            type: DataTypes.FLOAT
        },
        against_fairy: {
            type: DataTypes.FLOAT
        },
        against_fight: {
            type: DataTypes.FLOAT
        },
        against_fire: {
            type: DataTypes.FLOAT
        },
        against_flying: {
            type: DataTypes.FLOAT
        },
        against_ghost: {
            type: DataTypes.FLOAT
        },
        against_grass: {
            type: DataTypes.FLOAT
        },
        against_ground: {
            type: DataTypes.FLOAT
        },
        against_ice: {
            type: DataTypes.FLOAT
        },
        against_normal: {
            type: DataTypes.FLOAT
        },
        against_poison: {
            type: DataTypes.FLOAT
        },
        against_psychic: {
            type: DataTypes.FLOAT
        },
        against_rock: {
            type: DataTypes.FLOAT
        },
        against_steel: {
            type: DataTypes.FLOAT
        },
        against_water: {
            type: DataTypes.FLOAT
        },
        attack: {
            type: DataTypes.INTEGER
        },
        base_egg_steps: {
            type: DataTypes.INTEGER
        },
        base_happiness: {
            type: DataTypes.INTEGER
        },
        base_total: {
            type: DataTypes.INTEGER
        },
        capture_rate: {
            type: DataTypes.INTEGER
        },
        classification: {
            type: DataTypes.STRING
        },
        defense: {
            type: DataTypes.INTEGER
        },
        experience: {
            type: DataTypes.INTEGER
        },
        height_m: {
            type: DataTypes.FLOAT
        },
        hp: {
            type: DataTypes.INTEGER
        },
        japanese_name: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        percentage_male: {
            type: DataTypes.FLOAT
        },
        pokedex_number: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        sp_attack: {
            type: DataTypes.INTEGER
        },
        sp_defense: {
            type: DataTypes.INTEGER
        },
        speed: {
            type: DataTypes.INTEGER
        },
        type1: {
            type: DataTypes.STRING
        },
        type2: {
            type: DataTypes.STRING
        },
        weight_kg: {
            type: DataTypes.FLOAT
        },
        generation: {
            type: DataTypes.INTEGER
        },
        is_legendary: {
            type: DataTypes.INTEGER
        }



    }, {
        // Other model options go here
    });
    pokemon.sync({alter: true})
    return pokemon
}

// sequelize.define also returns the model


module.exports = Pokemon