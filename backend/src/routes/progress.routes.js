import { Router } from "express";

import {completeSkill,getProgress} from "../controllers/progress.controller.js";

import {protect} from "../middlewares/auth.middleware.js";

const router = Router();

// COMPLETE SKILL

router.patch(
  "/complete-skill",
  protect,
  completeSkill
);

// GET PROGRESS

router.get(
  "/",
  protect,
  getProgress
);

export default router;