"use strict";

// Son los usuarios que se ofrecen como voluntarios para desarrollar cierta meta

const Sequelize = require("sequelize");
class CommunityResourcesHuman extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  CommunityResourcesHuman.init(
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
      modelName: "communityResourcesHuman"
    }
  );
  CommunityResourcesHuman.associate = models => {
    CommunityResourcesHuman.belongsTo(models.aim, {
      foreignKey: "aimId"
    });
    CommunityResourcesHuman.belongsToMany(models.user, {
      through: "Rel_user_communityResourcesHumans"
    });
  };

  return CommunityResourcesHuman;
};
