const travellersRouter = require("express").Router();
const Traveller = require("../models/Traveller");

travellersRouter.get("/", async (request, response) => {
  const travellers = await Traveller.findAll();

  if (travellers?.length === 0) {
    response.status(400).send("No travellers exist");
    return;
  }

  console.log(travellers);

  response.status(200).json(travellers);
});

travellersRouter.post("/", async (request, response) => {
  const { name, email } = request.body;

  const traveller = await Traveller.create({
    name,
    email,
  });

  response.status(200).json(traveller);
});

module.exports = travellersRouter;
