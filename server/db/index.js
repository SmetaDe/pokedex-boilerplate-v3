const { db } = require("./db");

const { DataTypes } = require('sequelize');

const Trainer = db.define("Trainer", {
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
  imageURL: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "https://w7.pngwing.com/pngs/591/992/png-transparent-pokemon-platinum-unown-exclamation-mark-pokemon-trainer-unown-pokemon-celebi-technology-thumbnail.png",
  },
});

const Pokemon = db.define("Pokemon", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trainer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",
  },
});

// Place your associations here
Pokemon.belongsTo(Trainer);
Trainer.hasMany(Pokemon)

// Export your models
module.exports = {
  db,
  Pokemon,
  Trainer
};