import { Sequelize } from "sequelize";

const sequelize = new Sequelize("barbaqueue", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
export default sequelize;
