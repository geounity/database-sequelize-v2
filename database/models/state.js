"use strict";

const Sequelize = require("sequelize");
class State extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  State.init(
    {
      state: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      }
    },

    // Configuración
    {
      sequelize,
      modelName: "state",
      timestamps: false
    }
  );
  State.associate = models => {
    State.belongsTo(models.geopolitic, {
      foreignKey: "geopoliticUuid"
    });
    State.belongsTo(models.country, {
      foreignKey: "countryId"
    });
  };

  return State;
};
