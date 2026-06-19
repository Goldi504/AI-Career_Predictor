import User from "../models/User.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// UPDATE STREAK

export const updateStreak = asyncHandler(
  async (req, res) => {

    const user = await User.findById(req.user._id);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const today = new Date();

    const lastActivity = user.streak?.lastActivity;

    if (!lastActivity) {

      user.streak.current = 1;
      user.streak.longest = 1;
      user.streak.lastActivity = today;

    } else {

      const diffTime =
        today.getTime() -
        new Date(lastActivity).getTime();

      const diffDays =
        Math.floor(
          diffTime / (1000 * 60 * 60 * 24)
        );

      if (diffDays === 1) {

        user.streak.current += 1;

      } else if (diffDays > 1) {

        user.streak.current = 1;

      }

      if (
        user.streak.current >
        user.streak.longest
      ) {
        user.streak.longest =
          user.streak.current;
      }

      user.streak.lastActivity = today;
    }

    await user.save();

    return res.status(200).json(
      new ApiResponse(
        200,
        user.streak,
        "Streak updated successfully"
      )
    );
  }
);

// GET STREAK

export const getStreak = asyncHandler(
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

    return res.status(200).json(
      new ApiResponse(
        200,
        user.streak,
        "Streak fetched successfully"
      )
    );
  }
);