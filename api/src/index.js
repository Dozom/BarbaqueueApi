import app from "./app.js";
import sequelize from "./database/database.js";

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  app.listen(3000);
  console.log("Server is listening on port 3000");
}
main();
