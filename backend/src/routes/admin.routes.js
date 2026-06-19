import { Router } from "express";

import {getAllUsers,
    getAdminStats,
    getCareerTrends,
    getUserById} from "../controllers/admin.controller.js";

import {protect,authorize} from "../middlewares/auth.middleware.js";

const router = Router();


// ADMIN ONLY

router.get(
    "/users",
    protect,
    authorize("admin"),
    getAllUsers
);

router.get(
    "/users/:id",
    protect,
    authorize("admin"),
    getUserById
);

router.get(
    "/stats",
    protect,
    authorize("admin"),
    getAdminStats
);

router.get(
    "/trends",
    protect,
    authorize("admin"),
    getCareerTrends
);

export default router;