import User from "../models/User.model.js";

import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// GET PROFILE
export const getProfile = asyncHandler(
    async (req, res) => {

        const user = await User
            .findById(req.user._id)
            .select("-password -refreshToken");

        if (!user) {
            throw new ApiError(
                404,
                "User not found"
            );
        }
         return res.status(200).json(
            new ApiResponse(
                200,
                user,
                "Profile fetched successfully"
            )
        );
    }
);
// UPDATE PROFILE
export const updateProfile = asyncHandler(
    async (req, res) => {

        const {
            bio,
            skills,
            interests,
            education,
            experienceLevel,
            yearsOfExperience
        } = req.body;
        const user = await User.findByIdAndUpdate(

            req.user._id,
             {
                bio,
                skills,
                interests,
                education,
                experienceLevel,
                yearsOfExperience
            },

            {
                new: true,
                runValidators: true
            }
        )
        .select("-password -refreshToken");
         return res.status(200).json(
            new ApiResponse(
                200,
                user,
                "Profile updated successfully"
            )
        );
    }
);