import User from "../models/User.model.js";
import CareerTrend from "../models/CareerTrend.model.js";

import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


// =====================================
// GET ALL USERS
// =====================================

export const getAllUsers =
asyncHandler(async (req, res) => {

    const users = await User.find()
        .select("-password -refreshToken")
        .sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(
            200,
            users,
            "Users fetched successfully"
        )
    );
});


// =====================================
// GET ADMIN STATS
// =====================================

export const getAdminStats =
asyncHandler(async (req, res) => {

    const totalUsers =
        await User.countDocuments();

    const totalResumes =
        await User.countDocuments({
            "resume.resumeUrl": {
                $exists: true,
                $ne: ""
            }
        });

    const totalPredictions =
        await CareerTrend.aggregate([
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: "$count"
                    }
                }
            }
        ]);

    const activeUsers =
        await User.countDocuments({
            isActive: true
        });

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalUsers,

                activeUsers,

                totalResumes,

                totalPredictions:
                    totalPredictions[0]?.total || 0
            },
            "Admin statistics fetched"
        )
    );
});


// =====================================
// GET CAREER TRENDS
// =====================================

export const getCareerTrends =
asyncHandler(async (req, res) => {

    const trends =
        await CareerTrend.find()
            .sort({ count: -1 });

    return res.status(200).json(
        new ApiResponse(
            200,
            trends,
            "Career trends fetched"
        )
    );
});


// =====================================
// GET USER DETAILS
// =====================================

export const getUserById =
asyncHandler(async (req, res) => {

    const user =
        await User.findById(
            req.params.id
        ).select(
            "-password -refreshToken"
        );

    if (!user) {

        return res.status(404).json(
            new ApiResponse(
                404,
                null,
                "User not found"
            )
        );
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            user,
            "User fetched successfully"
        )
    );
});