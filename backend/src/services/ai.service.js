import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
apiKey: process.env.GROQ_API_KEY,
});

export const analyzeCareer = async (
profession,
level,
skills = []
) => {
try {
// const prompt = `
// You are an expert Career Counselor and Skill Gap Analyzer.

// User Profession:
// ${profession}

// Experience Level:
// ${level}

// Current Skills:
// ${skills.join(", ")}

// Analyze the user's profile and provide:

// 1. Career Readiness Score (0-100)
// 2. Missing Skills required for this profession
// 3. Recommended Skills to learn next
// 4. A learning roadmap for 8 weeks

// IMPORTANT:
// Return ONLY valid JSON.

// Format:

// {
// "careerReadiness": 0,
// "missingSkills": [],
// "recommendedSkills": [],
// "roadmap": [
// {
// "week": "Week 1",
// "topic": ""
// }
// ]
// }
// `;

const prompt = `
You are an expert Career Counselor.

Profession:
${profession}

Experience Level:
${level}

Current Skills:
${skills.join(", ")}

Analyze profile and return:

1. Career Readiness Score
2. Missing Skills
3. Recommended Skills
4. Skill Based Learning Roadmap

Return ONLY valid JSON.

{
  "careerReadiness": 0,
  "missingSkills": [],
  "recommendedSkills": [],
  "roadmap": [
    {
      "skill": "",
      "topics": []
    }
  ]
}
`;


const completion =
  await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.3,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

const content =
  completion.choices[0].message.content;
  console.log("GROQ RESPONSE:");
console.log(content);

// const cleanedContent = content
//   .replace(/```json/g, "")
//   .replace(/```/g, "")
//   .trim();

// return JSON.parse(cleanedContent);
const json =
  content.match(/\{[\s\S]*\}/)?.[0];

return JSON.parse(json);


} catch (error) {

console.error(
  "AI Analysis Error:",
  error
);

return {
  careerReadiness: 0,
  missingSkills: [],
  recommendedSkills: [],
  roadmap: [],
};


}
};
