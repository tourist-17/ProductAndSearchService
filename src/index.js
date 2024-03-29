const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");
const { PORT } = require("./config/serverConfig");
const db = require("./models/index");
// const sequelize = require("sequelize");

const setupAndStartServer = async () => {
  // create the express object
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server Started at ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });
};
setupAndStartServer();
