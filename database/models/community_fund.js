'use strict'

// Fondo comunitario de dinero para comprar los recursos necesarios para realizar una idea

const Sequelize = require('sequelize')
class CommunityFund extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {

  CommunityFund.init(
    {
      cant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      cant_need: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: 'communityFund'
    }
  )
  CommunityFund.associate = models => {
    CommunityFund.hasMany(models.donation, {
      foreignKey: "communityfundId"
    })
    CommunityFund.belongsTo(models.aim, {
      foreignKey: 'aimId'
    })
    CommunityFund.belongsTo(models.user, {
      foreignKey: 'userId'
    })

  }

  return CommunityFund
}
