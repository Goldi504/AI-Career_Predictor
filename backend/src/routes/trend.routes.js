import { Router } from "express";

import {getTrendingCareers,getTrendStats} from "../controllers/trend.controller.js";

import {protect} from "../middlewares/auth.middleware.js";

const router = Router();

router.get(
  "/",
  protect,
  getTrendingCareers
);

router.get(
  "/stats",
  protect,
  getTrendStats
);

export default router;