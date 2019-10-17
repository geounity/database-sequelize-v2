"use strict";

const Sequelize = require("sequelize");
class Static extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Static.init(
    {
      public: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      title: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
      },
      data: {
        type: DataTypes.JSON,
        allowNull: false
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },

    // Configuración
    {
      sequelize,
      modelName: "static"
    }
  );
  Static.associate = models => {
    Static.belongsTo(models.poll, {
      foreignKey: "pollId"
    });
    Static.belongsToMany(models.argument, {
      through: 'Rel_static_argument'
    });
  };

  return Static;
};
