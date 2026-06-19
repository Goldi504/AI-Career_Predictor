import User from "../models/User.model.js";

import { parseResume } from "../services/resumeParser.service.js";

import { extractSkills } from "../services/skillExtractor.service.js";

import { predictCareer } from "../ai/prediction.engine.js";

import { getCareerAdvice } from "../services/groq.service.js";

import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import fs from "fs";

export const uploadResume =
    asyncHandler(async (
        req,
        res
    ) => {

        const user =
            await User.findById(
                req.user._id
            );

        // console.log("FILE RECEIVED:", req.file);
        // console.log("EXISTS:", fs.existsSync(req.file.path));

        // const resumeText =
        //     await parseResume(
        //         req.file.path
        //     );

        console.log("FILE INFO:", req.file);
        console.log("FILE EXISTS:", fs.existsSync(req.file.path));

        const resumeText = await parseResume(req.file.path);

        const skills =
            extractSkills(
                resumeText
            );

        user.skills = skills;

        const prediction =
            predictCareer(skills);

        const advice =
            await getCareerAdvice(
                skills,
                prediction.career
            );

        user.aiProfile.predictedCareer =
            prediction.career;

        user.aiProfile.careerMatchScore =
            prediction.score;

        user.resume.resumeUrl =
            req.file.path;

        user.resume.extractedSkills =
            skills;

        await user.save();

        return res.status(200).json(

            new ApiResponse(
                200,
                {
                    extractedSkills:
                        skills,

                    predictedCareer:
                        prediction.career,

                    score:
                        prediction.score,

                    aiAdvice:
                        advice
                },
                "Resume analyzed successfully"
            )
        );
    });