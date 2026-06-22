import User from "../models/User.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// COMPLETE SKILL

// export const completeSkill = asyncHandler(
//   async (req, res) => {

//     const { skill } = req.body;

//     if (!skill) {
//       throw new ApiError(400, "Skill is required");
//     }

//     const user = await User.findById(req.user._id);

//     if (!user) {
//       throw new ApiError(404, "User not found");
//     }

//     const existingSkill = user.skillProgress.find(
//       item =>
//         item.skill.toLowerCase() ===
//         skill.toLowerCase()
//     );

//     if (existingSkill) {

//       existingSkill.completed = true;

//       existingSkill.completedAt = new Date();

//     } else {

//       user.skillProgress.push({
//         skill,
//         completed: true,
//         completedAt: new Date()
//       });

//     }

//     await user.save();

//     return res.status(200).json(
//       new ApiResponse(
//         200,
//         user.skillProgress,
//         "Skill marked as completed"
//       )
//     );
//   }
// );
// export const completeSkill =
// asyncHandler(async (
//   req,
//   res
// ) => {

//   const {
//     skill,
//     topic
//   } = req.body;

//   if (!skill || !topic) {
//     throw new ApiError(
//       400,
//       "Skill and Topic are required"
//     );
//   }

//   const user =
//     await User.findById(
//       req.user._id
//     );

//   if (!user) {
//     throw new ApiError(
//       404,
//       "User not found"
//     );
//   }

//   const alreadyCompleted =
//     user.skillProgress.find(
//       item =>
//         item.skill === skill &&
//         item.topic === topic
//     );

//   if (!alreadyCompleted) {

//     user.skillProgress.push({
//       skill,
//       topic,
//       completed: true,
//       completedAt: new Date()
//     });

//     await user.save();
//   }

//   return res.status(200).json(
//     new ApiResponse(
//       200,
//       user.skillProgress,
//       "Topic completed successfully"
//     )
//   );
// });

export const completeSkill =
asyncHandler(async (
 req,
 res
)=>{

 const {
  skill,
  topic
 } = req.body;

 const user =
 await User.findById(
  req.user._id
 );

 const alreadyExists =
 user.skillProgress.find(
  item =>

   item.skill === skill &&

   item.topic === topic
 );

 if(alreadyExists){

  return res.status(200).json({
   message:
   "Already Completed"
  });

 }

 user.skillProgress.push({

  skill,
  topic,

  completed:true,

  completedAt:
  new Date()

 });

 user.roadmapProgress
 .completedTasks += 1;

 user.streak.current += 1;

 if(
  user.streak.current >
  user.streak.longest
 ){

  user.streak.longest =
  user.streak.current;

 }

 user.streak.lastActivity =
 new Date();

 await user.save();

 return res.status(200).json({
  success:true
 });

});
// GET PROGRESS

export const getProgress =
asyncHandler(async (
  req,
  res
) => {

  const user =
    await User.findById(
      req.user._id
    );

  if (!user) {
    throw new ApiError(
      404,
      "User not found"
    );
  }

  const completedTopics =
    user.skillProgress.filter(
      item => item.completed
    ).length;

  const totalTopics =
    user.aiProfile
      ?.recommendedRoadmap
      ?.reduce(
        (acc, skill) =>
          acc +
          (skill.topics?.length || 0),
        0
      ) || 0;

  const progress =
    totalTopics > 0
      ? Math.round(
          (
            completedTopics /
            totalTopics
          ) * 100
        )
      : 0;

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        progress,
        totalTopics,
        completedTopics,
        data:
          user.skillProgress
      },
      "Progress fetched successfully"
    )
  );
});