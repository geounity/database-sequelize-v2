"use strict";

const Sequelize = require("sequelize");
class Opinion extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Opinion.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      votes_up: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      votes_down: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },

    {
      sequelize,
      modelName: "opinion"
    }
  );
  Opinion.associate = models => {
    Opinion.belongsTo(models.user, {
      foreignKey: "userId",
      as: "author"
    });
    Opinion.belongsTo(models.pointOfView, {
      foreignKey: "pointofviewId"
    });
    Opinion.belongsToMany(models.argument, {
      through: 'Rel_opinion_argument'
    })
  };

  return Opinion;
};
