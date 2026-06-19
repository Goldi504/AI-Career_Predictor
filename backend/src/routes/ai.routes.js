import { Router } from "express";

import {
    predictCareerController,
    getPredictionResult,
    getRoadmap,
    getSkillGap
} from "../controllers/ai.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
    "/predict-career",
    protect,
    predictCareerController
);

router.get(
    "/result",
    protect,
    getPredictionResult
);

router.get(
    "/roadmap",
    protect,
    getRoadmap
);

router.get(
    "/skill-gap",
    protect,
    getSkillGap
);

export default router;