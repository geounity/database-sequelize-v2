// Preguntas acerca de la propuesta (aim)

"use strict";

const Sequelize = require("sequelize");
class Question extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Question.init(
    {
      question: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },

    // Configuration
    {
      sequelize,
      modelName: "question"
    }
  );
  Question.associate = models => {
    Question.hasMany(models.answer, {
      foreignKey: "questionId"
    });
    Question.belongsTo(models.user, {
      foreignKey: "userId"
    });
    Question.belongsTo(models.aim, {
      foreignKey: "aimId"
    });
  };

  return Question;
};
