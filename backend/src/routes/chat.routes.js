// const express = require("express");

// const router = express.Router();

// const { chatWithAI, getHistory } = require("../controllers/chat.controller");

// const { protect } = require("../middlewares/auth.middleware");

// router.post("/", protect, chatWithAI);

// router.get("/history", protect, getHistory);

// module.exports = router;

import express from "express";

import {
  chatWithAI,
  getHistory,
} from "../controllers/chat.controller.js";
import { protect } from "../middlewares/auth.middleware.js";


// import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, chatWithAI);
router.get("/history", protect, getHistory);

export default router;