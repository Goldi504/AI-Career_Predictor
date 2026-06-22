import User from "../models/User.model.js";

import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
// import analyzeCareer from "../services/ai.service.js"
import { analyzeCareer } from "../services/ai.service.js";
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
// export const updateProfile = asyncHandler(
//     async (req, res) => {

//         const {
//             bio,
//             skills,
//             interests,
//             education,
//             experienceLevel,
//             yearsOfExperience
//         } = req.body;
//         const user = await User.findByIdAndUpdate(

//             req.user._id,
//              {
//                 bio,
//                 skills,
//                 interests,
//                 education,
//                 experienceLevel,
//                 yearsOfExperience
//             },

//             {
//                 new: true,
//                 runValidators: true
//             }
//         )
//         .select("-password -refreshToken");
//          return res.status(200).json(
//             new ApiResponse(
//                 200,
//                 user,
//                 "Profile updated successfully"
//             )
//         );
//     }
// );


export const updateProfile = asyncHandler(
  async (req, res) => {

    const {
      bio,
      skills,
      interests,
      education,
      profession,
      experienceLevel,
      yearsOfExperience
    } = req.body;

console.log("Received Skills:", skills);

    let user =
      await User.findByIdAndUpdate(
        req.user._id,
        {
          bio,
          skills,
          interests,
          education,
          profession,
          experienceLevel,
          yearsOfExperience
        },
        {
          new: true,
          runValidators: true
        }
      );

    // AI ANALYSIS

    if (
      profession?.trim() &&
      Array.isArray(skills) &&
      skills.length > 0
    ) {
  
        // try {

    const result = await analyzeCareer(
    profession,
    experienceLevel,
    skills
  );
  let totalTopics = 0;

result.roadmap.forEach((item) => {
  totalTopics += item.topics.length;
});

//     console.log("AI RESULT:", result);

// } catch(error) {

//   console.error(
//     "AI ERROR:",
//     error
//   );
// }


      user.aiProfile = {
        predictedCareer:profession,

        careerMatchScore:
          result.careerReadiness,

        missingSkills:
           result.missingSkills,

        recommendedSkills:
           result.recommendedSkills,

         recommendedRoadmap:
           result.roadmap,
        analyzedAt:

          new Date()
      };

       // Save Total Roadmap Topics
user.roadmapProgress.totalTasks =
  totalTopics;

      await user.save({
        validateBeforeSave: false
      });
    }

// AI ANALYSIS

// if (
//   profession?.trim() &&
//   Array.isArray(skills) &&
//   skills.length > 0
// ) {

//   let result;

//   try {

//     result = await analyzeCareer(
//       profession,
//       experienceLevel,
//       skills
//     );

//     console.log("AI RESULT:");
//     console.log(result);

//   } catch (error) {

//     console.error(
//       "AI ERROR:",
//       error
//     );

//     throw error;
//   }

//   console.log(
//     "Profession:",
//     profession
//   );

//   console.log(
//     "Skills:",
//     skills
//   );

//   user.aiProfile = {
//     predictedCareer:
//       profession,

//     careerMatchScore:
//       result.careerReadiness,

//     missingSkills:
//       result.missingSkills,

//     recommendedSkills:
//       result.recommendedSkills,

//     recommendedRoadmap:
//       result.roadmap,

//     analyzedAt:
//       new Date()
//   };

//   await user.save({
//     validateBeforeSave: false
//   });
// }
    user =
      await User.findById(
        req.user._id
      ).select(
        "-password -refreshToken"
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        user,
        "Profile updated successfully"
      )
    );
  }
);