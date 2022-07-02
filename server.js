const express = require("express");
const sequelize = require("./config/connection");
const { Traveller, Trips, Location } = require("./models");
const routes = require("./routes");

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("Server is live!"));
});
