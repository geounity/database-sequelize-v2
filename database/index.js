const debug = require("debug")("geounity:db:index");

const models = require("./models");

if (process.env.NODE_ENV !== "production") require("longjohn");

module.exports = async () => {
  debug("Sequelize connecting to Postgres");
  const sequelize = models.sequelize;
  await sequelize.authenticate();
  await sequelize.sync({ force: true })
  // Services
  const countryService = require("./services/country");
  const debateService = require("./services/debate");
  const geopoliticService = require("./services/geopolitic");
  const stateService = require("./services/state");
  const userService = require("./services/user");

  return {
    Aim: {},
    Answer: {},
    CommunityFund: {},
    Country: countryService(models.country),
    Debate: debateService(models.debate),
    Denuncias: {},
    Donation: {},
    Geopolitic: geopoliticService(models.geopolitic),
    Opinion: {},
    Organization: {},
    PointOfView: {},
    Poll: {},
    QuestionAim: {},
    ResourceHuman: {},
    ResourceMaterial: {},
    State: stateService(models.state),
    Static: {},
    SubQuestion: {},
    User: userService(models.user)
    // User: userService(models.user)
  };
};
