"use strict";

const Sequelize = require("sequelize");
class Ideologic extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Ideologic.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: 0
      }
    },
    {
      sequelize,
      modelName: "ideologic"
    }
  );
  Ideologic.associate = models => {
    Ideologic.hasMany(models.aim, {
      foreignKey: "ideologicId",
      onDelete: "CASCADE"
    });
    Ideologic.hasMany(models.debate, {
      foreignKey: "ideologicId",
      onDelete: "CASCADE"
    });
    Ideologic.hasMany(models.poll, {
      foreignKey: "ideologicId",
      onDelete: "CASCADE"
    });
    Ideologic.hasMany(models.user, {
      foreignKey: "ideologicId"
    });
  };

  return Ideologic;
};
