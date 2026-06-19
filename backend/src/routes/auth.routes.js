import express from "express";

import {registerUser,loginUser,logoutUser,refreshAccessToken} from "../controllers/auth.controller.js";

import {protect} from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import {registerSchema,loginSchema}from "../validators/auth.validator.js";

const router = express.Router();

// Register
router.post(
  "/register",
  registerUser
);
// Login
router.post("/login",validate(loginSchema),loginUser);

// Refresh Token
router.post("/refresh",refreshAccessToken);

// Logout
router.post("/logout",protect,logoutUser);
router.get("/test", (req, res) => {res.json({
    success: true,
    message: "Auth Route Working"
  });
});


export default router;