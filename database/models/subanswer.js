"use strict";

const Sequelize = require("sequelize");
class Subanswer extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Subanswer.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0
      }
    },

    // Configuration
    {
      sequelize,
      modelName: "subanswer"
    }
  );
  Subanswer.associate = models => {
    Subanswer.belongsTo(models.user, {
      foreignKey: "userId",
      as: "author"
    });
    Subanswer.belongsToMany(models.subquestion, {
      through: "R_subquestion_subanswer"
    });
  };

  return Subanswer;
};
