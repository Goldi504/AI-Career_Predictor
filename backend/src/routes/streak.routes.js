import { Router } from "express";

import {updateStreak,getStreak} from "../controllers/streak.controller.js";

import {protect} from "../middlewares/auth.middleware.js";

const router = Router();

// UPDATE STREAK

router.post(
  "/update",
  protect,
  updateStreak
);

// GET STREAK

router.get(
  "/",
  protect,
  getStreak
);

export default router;