const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

Trip.hasMany(Traveller, {
  foreignKey: "traveller_id",
});

Traveller.belongsTo(Trip, {
  foreignKey: "traveller_id",
});

Trip.hasMany(Location, {
  foreignKey: "location_id",
});

Location.belongsTo(Trip, {
  foreignKey: "location_id",
});

module.exports = { Traveller, Location, Trip };
