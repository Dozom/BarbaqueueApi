import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Parcel = sequelize.define(
  "Parcel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.STRING,
    },
    people_price: {
      type: DataTypes.FLOAT,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image1: {
      type: DataTypes.STRING,
    },
    image2: {
      type: DataTypes.STRING,
    },
    image3: {
      type: DataTypes.STRING,
    },
  },
  {
    schema: "barbaqueue",
  }
);

export default Parcel;
