// models/trainer.js
const { DataTypes } = require('sequelize');
const db = require('../server/db');
const Pokemon = require('./Pokemon');

const Trainer = db.define('Trainer', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: 'default_image_url.jpg',
  },
});

module.exports = Trainer;

// many to many relationship
Trainer.belongsToMany(Pokemon, {through: "PokemonTrainer"});

module.exports = {
    Trainer,
};