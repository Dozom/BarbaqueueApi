import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
} from "../controllers/users.controller.js";
const router = Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/users", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.delete("/user/:id", loginUser);

export default router;
