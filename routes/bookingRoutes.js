import express from 'express';
import authorize from '../middlewares/authorize.js';
import { getAllBookings, getOneBooking, getUsersBooking, createBooking, updateBooking, deleteBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.get("/", authorize(['Admin']), getAllBookings);
router.get("/:id", authorize(['Admin']), getUsersBooking);
router.post("/", authorize(['User', 'Admin']), createBooking);
router.patch("/:id", authorize(["Admin"]), updateBooking);
router.delete("/:id", authorize(["Admin"]), deleteBooking);

export default router;