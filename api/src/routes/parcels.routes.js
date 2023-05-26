import { Router } from "express";
import {
  createParcel,
  deleteParcel,
  getParcel,
  getParcelByUser,
  getParcels,
  updateParcel,
} from "../controllers/parcel.controller.js";
const router = Router();

router.get("/parcels", getParcels);
router.get("/parcel/:id", getParcel);
router.get("/parcelsUser/:id", getParcelByUser);
router.post("/createParcel", createParcel);
router.put("/parcel/:id", updateParcel);
router.delete("/parcel/:id", deleteParcel);

export default router;
