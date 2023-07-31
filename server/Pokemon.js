const { DataTypes } = require('sequelize');
const db = require('./db');
const Trainer = require('./Trainer');

const Pokemon = db.define("Pokemon", {
    name:{
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
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: 'default_image_url.jpg',
    },
});

 Pokemon.hasOne(Trainer);

module.exports = {
    db,
    Pokemon,
};