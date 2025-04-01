const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(config.development);

const db = {
  Sequelize,
  sequelize,
};

module.exports = db;
