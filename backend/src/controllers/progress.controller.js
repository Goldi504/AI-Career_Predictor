import User from "../models/User.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// COMPLETE SKILL

export const completeSkill = asyncHandler(
  async (req, res) => {

    const { skill } = req.body;

    if (!skill) {
      throw new ApiError(400, "Skill is required");
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const existingSkill = user.skillProgress.find(
      item =>
        item.skill.toLowerCase() ===
        skill.toLowerCase()
    );

    if (existingSkill) {

      existingSkill.completed = true;

      existingSkill.completedAt = new Date();

    } else {

      user.skillProgress.push({
        skill,
        completed: true,
        completedAt: new Date()
      });

    }

    await user.save();

    return res.status(200).json(
      new ApiResponse(
        200,
        user.skillProgress,
        "Skill marked as completed"
      )
    );
  }
);

// GET PROGRESS

export const getProgress = asyncHandler(
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

    const totalSkills =
      user.skills?.length || 0;

    const completedSkills =
      user.skillProgress.filter(
        skill => skill.completed
      ).length;

    const progress =
      totalSkills > 0
        ? Math.round(
            (completedSkills / totalSkills) * 100
          )
        : 0;

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          totalSkills,
          completedSkills,
          progress,
          skillProgress:
            user.skillProgress
        },
        "Progress fetched successfully"
      )
    );
  }
);