"use strict";

const Sequelize = require("sequelize");
class Organization extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Organization.init(
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
      modelName: "organization"
    }
  );
  Organization.associate = models => {
    Organization.hasMany(models.aim, {
      foreignKey: "organizationId",
      onDelete: "CASCADE"
    });
    Organization.hasMany(models.debate, {
      foreignKey: "organizationId",
      onDelete: "CASCADE"
    });
    Organization.hasMany(models.poll, {
      foreignKey: "organizationId",
      onDelete: "CASCADE"
    });
    Organization.hasMany(models.user, {
      foreignKey: "organizationId"
    });
  };

  return Organization;
};
