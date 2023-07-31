const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://127.0.0.1S:5432/pokedex",
  {
    logging: false,
  }
);
module.exports = { db, Sequelize };
