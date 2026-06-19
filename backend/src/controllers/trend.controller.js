import CareerTrend from "../models/CareerTrend.model.js";

import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


// GET TRENDING CAREERS

export const getTrendingCareers =
asyncHandler(async (req, res) => {

  const trends =
    await CareerTrend
      .find()
      .sort({ count: -1 })
      .limit(10);

  return res.status(200).json(
    new ApiResponse(
      200,
      trends,
      "Trending careers fetched successfully"
    )
  );
});


// DASHBOARD STATS

export const getTrendStats =
asyncHandler(async (req, res) => {

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

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        totalPredictions:
          totalPredictions[0]?.total || 0
      },
      "Trend statistics fetched"
    )
  );
});