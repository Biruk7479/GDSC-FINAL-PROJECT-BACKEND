import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import carRoutes from "./routes/carRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/car", carRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/user", userRoutes)
app.use("/auth", authRoutes);


(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await app.listen(8745, () => {
      console.log("Listening on Port 8745");
    });
  } catch (e) {
    console.log(e.message);
  }
})();
