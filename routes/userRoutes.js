import express from "express";
import authorize from '../middlewares/authorize.js';
import {
  getUsers,
  getUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// Define the routes
router.get("/", authorize(['Admin']), getUsers);
router.get("/:id", authorize(['Admin']), getUser);
router.delete("/:id", authorize(['Admin']), deleteUser);

export default router;