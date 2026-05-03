const { Sequelize } = require("sequelize");
const models = require("./models");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database/db.sqlite",
  logging: false,
});

sequelize
  .sync()
  .then(async () => {
    console.log("Models successfully synced.");
    const seed = require('./seed'); 
    await seed();                    
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { sequelize, models };
