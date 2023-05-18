import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Billing = sequelize.define(
  "Billing",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    parcel_id: {
      type: DataTypes.INTEGER,
    },
    people_amount: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.FLOAT,
    },
    date: {
      type: DataTypes.DATE,
    },
  },
  {
    schema: "barbaqueue",
  }
);

export default Billing;
