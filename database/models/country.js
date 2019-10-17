"use strict";

const Sequelize = require("sequelize");
class Country extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Country.init(
    {
      code: {
        type: DataTypes.CHAR(2),
        allowNull: false
      },
      country: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      flag: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      in_continent: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      subregion: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      division_name: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      cant_states: {
        type: DataTypes.INTEGER,
        allowNull: true
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
      modelName: "country",
      timestamps: false
    }
  );
  Country.associate = models => {
    Country.hasMany(models.state, {
      foreignKey: 'countryId',
      onDelete: 'CASCADE'
    })
    Country.belongsTo(models.geopolitic, {
      foreignKey: 'geopoliticUuid',
      onDelete: 'CASCADE'
    })
  }

  return Country
};
