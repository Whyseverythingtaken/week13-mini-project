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

  try {
    const traveller = await Traveller.create({
      name,
      email,
    });

    response.status(200).json(traveller);
  } catch (error) {
    response.status(500).json(error);
  }
});

travellersRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const traveller = await Traveller.findByPk(id);

  if (!traveller) {
    response
      .status(400)
      .send(`Please provide a valid traveller id, ID: ${id} does not exist.`);

    return;
  }

  response.status(200).json(traveller);
});

module.exports = travellersRouter;
