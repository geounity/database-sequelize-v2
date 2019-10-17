"use strict";

const debug = require("debug")("gu:db:config");
const chalk = require("chalk");
require('dotenv').config()

module.exports = {
  dev: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
    logging: s => debug(chalk.cyan(s)),
    define: {
      freezeTableName: false, // transforma el nombre de la tabla a pural
      timestamps: true, // agrega atributos (updatedAt, createdAt)
      underscored: true // transforma camelcase a underscore (updatedAt a updated_at)
    }
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
    define: {
      freezeTableName: false,
      timestamps: true,
      underscored: true
    }
  },
  production: {
    // var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    pool: {
      min: 0,
      max: 20,
      idle: 30000,
      acquire: 60000
    },
    define: {
      freezeTableName: false, // transforma el nombre de la tabla a pural
      timestamps: true, // agrega atributos (updatedAt, createdAt)
      underscored: true // transforma camelcase a underscore (updatedAt a updated_at)
    }
  }
};
