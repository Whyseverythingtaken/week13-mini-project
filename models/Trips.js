const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "traveller",
        key: "id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
      },
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: "trips",
  }
);

module.exports = Trips;
