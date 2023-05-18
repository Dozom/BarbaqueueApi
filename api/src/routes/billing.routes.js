import { Router } from "express";
import { createBilling } from "../controllers/billing.controller.js";
const router = Router();

router.post("/billings", createBilling);

export default router;
