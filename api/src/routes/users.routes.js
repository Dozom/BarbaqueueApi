import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
  uploadUserImage,
} from "../controllers/users.controller.js";
import User from "../models/User.js";
import multer from "multer";

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: none
 */
router.get("/users", getUsers);

router.get("/user/:id", getUser);
router.post("/createUser", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.post("/userlogin", loginUser);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
const uploadFile = (req, res) => {
  console.log("hello" + req);
  res.send({ data: "Enviar un archivo: " });
};

router.post("/sasasa", upload.single("myFile"), uploadFile);

export default router;
