"use strict";

const Sequelize = require("sequelize");
class Subquestion extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Subquestion.init(
    {
      content: {
        type: DataTypes.STRING(255),
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
      modelName: "subquestion"
    }
  );
  Subquestion.associate = models => {
    Subquestion.belongsTo(models.user, {
      foreignKey: "userId",
      as: "author"
    });
    Subquestion.belongsTo(models.answer, {
      foreignKey: "answerId"
    });
    Subquestion.belongsToMany(models.subanswer, {
      through: "R_subquestion_subanswer"
    });
  };

  return Subquestion;
};
