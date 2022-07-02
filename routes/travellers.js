const travellersRouter = require("express").Router();

travellersRouter.get("/", (request, response) => {
  response.send("Works!");
});

module.exports = travellersRouter;
