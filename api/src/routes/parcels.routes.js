import { Router } from "express";
import {
  createParcel,
  deleteParcel,
  getParcel,
  getParcels,
  updateParcel,
} from "../controllers/parcel.controller.js";
const router = Router();

router.get("/parcels", getParcels);
router.get("/parcel/:id", getParcel);
router.post("/parcels", createParcel);
router.put("/parcel/:id", updateParcel);
router.delete("/parcel/:id", deleteParcel);

export default router;
