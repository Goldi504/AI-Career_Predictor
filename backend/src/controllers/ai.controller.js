import User from "../models/User.model.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

import { predictCareer } from "../ai/prediction.engine.js";
import { findSkillGap } from "../ai/skillGap.engine.js";
import { generateRoadmap } from "../ai/roadmap.engine.js";
import CareerTrend from "../models/CareerTrend.model.js";


// ==========================================
// PREDICT CAREER
// POST /api/v1/ai/predict-career
// ==========================================

export const predictCareerController = asyncHandler(
    async (req, res) => {

        const user = await User.findById(
            req.user._id
        );

        if (!user) {
            throw new ApiError(
                404,
                "User not found"
            );
        }

        const userSkills = user.skills || [];

        if (userSkills.length === 0) {
            throw new ApiError(
                400,
                "Please add skills first"
            );
        }

        // Career Prediction
        const prediction =
            predictCareer(userSkills);

            await CareerTrend.findOneAndUpdate(
                  {
                    career: prediction.career
                  },
                  {
                    $inc: {
                      count: 1
                    }
                  },
                  {
                    upsert: true,
                    new: true
                  }
                );

        // Skill Gap Analysis
        const missingSkills =
            findSkillGap(
                userSkills,
                prediction.career
            );

        // Roadmap Generation
        const roadmap =
            generateRoadmap(
                missingSkills
            );

        // Save AI Results
        user.aiProfile = {
            predictedCareer:
                prediction.career,

            careerMatchScore:
                prediction.score,

            missingSkills,

            recommendedRoadmap:
                roadmap
        };

        await user.save({
            validateBeforeSave: false
        });

        return res.status(200).json(
            new ApiResponse(
                200,
                {
                    predictedCareer:
                        prediction.career,

                    matchScore:
                        prediction.score,

                    missingSkills,

                    roadmap
                },
                "Career prediction completed successfully"
            )
        );
    }
);


// ==========================================
// GET AI RESULT
// GET /api/v1/ai/result
// ==========================================

export const getPredictionResult =
asyncHandler(async (req, res) => {

    const user = await User.findById(
        req.user._id
    );

    if (!user) {
        throw new ApiError(
            404,
            "User not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            user.aiProfile,
            "Prediction result fetched successfully"
        )
    );
});


// ==========================================
// GET ROADMAP
// GET /api/v1/ai/roadmap
// ==========================================

export const getRoadmap =
asyncHandler(async (req, res) => {

    const user = await User.findById(
        req.user._id
    );

    if (!user) {
        throw new ApiError(
            404,
            "User not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            user.aiProfile?.recommendedRoadmap || [],
            "Roadmap fetched successfully"
        )
    );
});


// ==========================================
// GET SKILL GAP
// GET /api/v1/ai/skill-gap
// ==========================================

export const getSkillGap =
asyncHandler(async (req, res) => {

    const user = await User.findById(
        req.user._id
    );

    if (!user) {
        throw new ApiError(
            404,
            "User not found"
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            user.aiProfile?.missingSkills || [],
            "Skill gap fetched successfully"
        )
    );
});