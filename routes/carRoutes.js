import express from "express";
import authorize from '../middlewares/authorize.js';
import {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";

const router = express.Router();

// Define the routes
router.get("/", getCars);
router.get("/:id", getCar);
router.post("/", authorize(['Admin']), createCar);
router.patch("/:id", authorize(['Admin']), updateCar);
router.delete("/:id", authorize(['Admin']), deleteCar);

export default router;