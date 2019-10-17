"use strict";

const Sequelize = require("sequelize");
class Complaint extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {

  Complaint.init(
    {
      object: {
        // Ojbeto que denuncia, puede ser una opinion en un debate, una pregunta o una respuesta
        type: DataTypes.CHAR(10),
        allowNull: false
      },
      asunto: {
        type: DataTypes.STRING(100)
      }
    },

    // Config
    {
      sequelize,
      modelName: "complaint"
    }
  );
  Complaint.associate = models => {
    Complaint.belongsTo(models.user, {
      foreignKey: 'userId'
    })
  }

  return Complaint
};
