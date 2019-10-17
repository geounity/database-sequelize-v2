"use strict";

const Sequelize = require("sequelize");
class Aim extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Aim.init(
    {
      public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING(30)),
        allowNull: true
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
      modelName: "aim"
    }
  );
  Aim.associate = models => {
    Aim.hasMany(models.question, {
      foreignKey: "aimId",
      as: "questions",
      onDelete: "CASCADE"
    });
    Aim.hasOne(models.communityResourcesHuman, {
      foreignKey: "aimId",
      onDelete: "CASCADE"
    });
    Aim.hasOne(models.resourcesMaterial, {
      foreignKey: "aimId",
      onDelete: "CASCADE"
    });
    Aim.hasOne(models.communityFund, {
      foreignKey: "aimId",
      onDelete: "CASCADE"
    });
    Aim.belongsTo(models.user, {
      foreignKey: "userId"
    })
    Aim.belongsToMany(models.debate, {
      through: "Rel_debate_aim"
    })
  };

  return Aim
};
