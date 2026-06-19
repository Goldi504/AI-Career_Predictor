import User from "../models/User.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export const getDashboardAnalytics = asyncHandler(
  async (req, res) => {

    const user = await User.findById(req.user._id);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const skillsCount = user.skills?.length || 0;

    const missingSkillsCount =
      user.aiProfile?.missingSkills?.length || 0;

    const roadmapTasks =
      user.aiProfile?.recommendedRoadmap?.length || 0;

    const completedTasks =
      user.roadmapProgress?.completedTasks || 0;

    const progress =
      roadmapTasks > 0
        ? Math.round(
            (completedTasks / roadmapTasks) * 100
          )
        : 0;

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          career:
            user.aiProfile?.predictedCareer || "",

          careerMatchScore:
            user.aiProfile?.careerMatchScore || 0,

          skillsCount,

          missingSkillsCount,

          roadmapTasks,

          completedTasks,

          progress,

          resumeUploaded:
            !!user.resume?.resumeUrl,

          experienceLevel:
            user.experienceLevel,

          yearsOfExperience:
            user.yearsOfExperience
        },
        "Dashboard analytics fetched successfully"
      )
    );
  }
);