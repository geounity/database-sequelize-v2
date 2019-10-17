"use strict";

const Sequelize = require("sequelize");
class Argument extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Argument.init(
    {
      content: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      link: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    },

    // Config
    {
      sequelize,
      modelName: "argument"
    }
  );
  Argument.associate = models => {
    Argument.belongsTo(models.user, {
      foreignKey: "userId"
    });
    Argument.belongsToMany(models.opinion, {
      through: "Rel_opinion_argument"
    });
    Argument.belongsToMany(models.static, {
      through: "Rel_static_argument"
    });
  };

  return Argument;
};
