import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import Post from "../mongodb/models/post.js";

dotenv.config();
const router = express.Router();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
router.route("/").get(async (req, res) => {
  res.send("Hello From Dall-E!");
});

export default router;
