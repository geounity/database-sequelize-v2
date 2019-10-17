"use strict";

const Sequelize = require("sequelize");
class Poll extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Poll.init(
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      questions: {
        // Esto va a contener una referencia a FireStore
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: "poll"
    }
  );
  Poll.associate = models => {
    Poll.belongsTo(models.user, {
      foreignKey: "userId",
      as: "author"
    });
    Poll.belongsTo(models.geopolitic, {
      foreignKey: "geopoliticUuid"
    });
    Poll.belongsTo(models.organization, {
      foreignKey: "organizationId"
    });
    Poll.belongsTo(models.ideologic, {
      foreignKey: "ideologicId"
    });
    Poll.belongsToMany(models.debate, {
      through: "Rel_debate_poll"
    })
  };

  return Poll;
};
