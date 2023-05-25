import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";
import parcelsRoutes from "./routes/parcels.routes.js";
import billingRoutes from "./routes/billing.routes.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(usersRoutes);
app.use(parcelsRoutes);
app.use(billingRoutes);

export default app;
