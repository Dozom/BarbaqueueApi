import { Router } from "express";
import { createBilling } from "../controllers/billing.controller.js";
const router = Router();

router.post("/billings", createBilling);
router.post("/billingFindParcel", createBilling);

export default router;
