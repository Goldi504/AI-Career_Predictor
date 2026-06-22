import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import aiRoutes from "./ai.routes.js";
import resumeRoutes from "./resume.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import progressRoutes from "./progress.routes.js";
import streakRoutes from "./streak.routes.js";
import trendRoutes from "./trend.routes.js";
import adminRoutes from "./admin.routes.js";
import chatRoutes from "./chat.routes.js";



const router = Router();

// AUTH ROUTES
router.use("/auth",authRoutes);

// USER ROUTES
router.use("/users",userRoutes);

// AI ROUTES
router.use("/ai",aiRoutes);

// uploade resume 

router.use("/resume",resumeRoutes);

//dashboard routes
router.use("/dashboard", dashboardRoutes);

//progress routes
router.use("/progress", progressRoutes);

//strack progress
router.use("/streak", streakRoutes);

router.use("/trends", trendRoutes);

//admin router
router.use("/admin", adminRoutes);
// router.use("/chat", require("./chat.routes"));
router.use("/chat", chatRoutes);


export default router;