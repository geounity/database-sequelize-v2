"use strict";

module.exports = function setupDebateService(
  DebateModel,
  UserModel,
  GeopoliticModel
) {
  async function saveDebate(username, debate) {
    const user = await UserModel.findOne({
      where: { username }
    });
    if (user) {
      // let existingTitle = await this.findByTitle(debate.title)
      const existingTitle = await DebateModel.findOne({
        where: { title: debate.title }
      });
      if (!existingTitle) {
        const newDebate = await DebateModel.create(debate);
        await user.addDebates([newDebate]);
        return newDebate;
      }
      return Promise.reject(new Error("Title debate exists yet"));
    }
    return Promise.reject(new Error("User not exists"));
  }

  async function getDebates(includeUser) {
    if (!includeUser) return DebateModel.findAll();
    else {
      return DebateModel.findAll({
        include: [
          {
            model: UserModel,
            attributes: ['username', 'photo']
          }
        ]
      });
    }
  }

  function findByTitle(title) {
    return DebateModel.findOne({
      where: {
        title
      }
    });
  }

  function findByUserId(id) {
    return DebateModel.findAll({
      attributes: [
        "type",
        "public",
        "title",
        "votes_up",
        "votes_down",
        "create_at"
      ],
      include: [
        {
          attributes: [],
          model: UserModel,
          where: {
            id
          }
        }
      ],
      raw: true
    });
  }

  return {
    saveDebate,
    getDebates,
    findByTitle,
    findByUserId
  };
};
