"use strict";

// Son los materiales que se necesitan para desarrollar cierta meta

const Sequelize = require("sequelize");
class ResourcesMaterial extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  ResourcesMaterial.init(
    {
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING(30)),
        allowNull: true
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      cant: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: "resourcesMaterial"
    }
  );
  ResourcesMaterial.associate = models => {
    ResourcesMaterial.belongsTo(models.aim, {
      foreignKey: 'aimId'
    })
    ResourcesMaterial.belongsTo(models.user, {
      foreignKey: 'userId'
    })
  }

  return ResourcesMaterial;
};
