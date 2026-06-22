import { Router } from "express";

import {completeSkill,getProgress} from "../controllers/progress.controller.js";

import {protect} from "../middlewares/auth.middleware.js";

const router = Router();

// COMPLETE SKILL

// router.patch(
//   "/complete-skill",
//   protect,
//   completeSkill
// );

// GET PROGRESS

router.get(
  "/",
  protect,
  getProgress
);


router.post(
  "/complete",
  protect,
  completeSkill
);

export default router;


// import express from "express";

// import {
//   completeTopic,
//   getTopicProgress
// } from "../controllers/progress.controller.js";

// import protect from "../middlewares/auth.middleware.js";

// const router = express.Router();

// router.post(
//   "/complete-topic",
//   protect,
//   completeTopic
// );

// router.get(
//   "/topic-progress",
//   protect,
//   getTopicProgress
// );

// export default router;