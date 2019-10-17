"use strict";

const Sequelize = require("sequelize");
class Debate extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Debate.init(
    {
      type: {
        type: DataTypes.ENUM,
        values: ["geopolitics", "idelogics", "bussines"], // Define un filtro para los puntos de vista
        allowNull: false
      },
      public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      title: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 5,
          max: 100
        }
      },
      description: {
        type: DataTypes.STRING(1000),
        unique: false,
        allowNull: true
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING(200)),
        allowNull: true
      },
      char_min: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2
      },
      char_max: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 200
      }
    },

    // Configuración
    {
      sequelize,
      modelName: "debate"
    }
  );
  Debate.associate = models => {
    Debate.hasMany(models.pointOfView, {
      foreignKey: "debateId",
      as: "pointsOfView",
      onDelete: "CASCADE"
    });
    Debate.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user"
    });
    Debate.belongsToMany(models.poll, {
      through: "Rel_debate_poll"
    });
    Debate.belongsToMany(models.aim, {
      through: "Rel_debate_aim"
    });
  };

  return Debate;
};
