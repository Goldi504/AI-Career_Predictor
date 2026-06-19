import { Router } from "express";

import upload from "../middlewares/upload.middleware.js";

import {uploadResume} from "../controllers/resume.controller.js";

import {protect} from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/upload",protect,upload.single("resume"),uploadResume);


export default router;