"use strict";

const Sequelize = require("sequelize");
class Geopolitic extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Geopolitic.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        validate: { isUUID: 4 }
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: 0
      },
      division_name: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      in_uuid: {
        type: DataTypes.UUID,
        references: {
          model: "geopolitics",
          key: "uuid",
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
    },
    {
      sequelize,
      modelName: "geopolitic"
    }
  );
  Geopolitic.associate = models => {
    Geopolitic.hasMany(models.aim, {
      foreignKey: "geopoliticUuid",
      onDelete: "CASCADE"
    });
    Geopolitic.hasMany(models.debate, {
      foreignKey: "geopoliticUuid",
      onDelete: "CASCADE"
    });
    Geopolitic.hasMany(models.poll, {
      foreignKey: "geopoliticUuid",
      onDelete: "CASCADE"
    });
    Geopolitic.hasMany(models.user, {
      foreignKey: "geopoliticUuid"
    });
  };

  return Geopolitic;
};
