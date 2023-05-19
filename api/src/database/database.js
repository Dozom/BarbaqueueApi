import { Sequelize } from "sequelize";

const sequelize = new Sequelize("barbaqueue", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});
export default sequelize;
