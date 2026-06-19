import { Router } from "express";


import authRoutes from "./auth.routes.js";
import {
    getProfile,
    updateProfile
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";


const router = Router();

router.use("/auth",authRoutes);

router.get("/profile",protect,getProfile);

router.put("/profile",protect,updateProfile);

export default router;