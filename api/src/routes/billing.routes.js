import { Router } from "express";
import {
  createBilling,
  findBillingsByParcelId,
} from "../controllers/billing.controller.js";
const router = Router();

router.post("/billings", createBilling);

router.post("/findBillingsByParcelId/:id", findBillingsByParcelId);

export default router;
