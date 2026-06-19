import { Router } from "express";

import { protect } from "../middlewares/auth.middleware.js";

import {getDashboardAnalytics} from "../controllers/dashboard.controller.js";

const router = Router();
console.log("✅ Dashboard Routes Loaded");
router.get("/analytics",protect,getDashboardAnalytics);
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Dashboard Route Working"
  });
});

export default router;