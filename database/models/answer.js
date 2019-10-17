"use strict";

// Respuestas a una pregunta o subpregunta de una propuesta

const Sequelize = require("sequelize");
class Answer extends Sequelize.Model {}

module.exports = (sequelize, DataTypes) => {
  Answer.init(
    {
      content: {
        type: DataTypes.STRING(1000),
        allowNull: false
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      sequelize,
      modelName: "answer"
    }
  );
  Answer.associate = models => {
    Answer.hasMany(models.subquestion, {
      foreignKey: "answerId",
      onDelete: "CASCADE"
    });
    Answer.belongsTo(models.user, {
      foreignKey: "userId",
      as: "author"
    });
    Answer.belongsTo(models.question, {
      foreignKey: "questionId"
    });
  };

  return Answer;
};
