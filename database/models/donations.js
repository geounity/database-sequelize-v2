"use strict";

const Sequelize = require("sequelize");
class Donation extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Donation.init(
    {
      cant: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      asunto: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: "donation"
    }
  );
  Donation.associate = models => {
    Donation.belongsTo(models.user, {
      foreignKey: 'userId'
    });
    Donation.belongsTo(models.communityFund, {
      foreignKey: 'communityfundId'
    });
  };

  return Donation;
};
