import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongodb/models/post.js";

dotenv.config();
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from POSTS routes" });
});

export default router;
