const express = require("express");
const sequelize = require("./config/connection");

const PORT = process.env.PORT ?? 3001;

const app = express();

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Server is live!"));
});
