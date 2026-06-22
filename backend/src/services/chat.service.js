// const { GoogleGenerativeAI } = require("@google/generative-ai");
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const askAI = async (message, user) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an AI Learning Assistant.

Student Information:

Weak Subjects:
${user?.weakSubjects?.join(", ") || "None"}

Strong Subjects:
${user?.strongSubjects?.join(", ") || "None"}

Help with:

- Aptitude
- Reasoning
- Verbal
- Coding
- Java
- JavaScript
- React
- DBMS
- OS
- CN
- Placement Preparation

Question:
${message}

Give concise and educational answers.
`;

console.log("GEMINI KEY:", process.env.GEMINI_API_KEY);
console.log("USER:", user);

  const result = await model.generateContent(prompt);

  return result.response.text();
};

// module.exports = { askAI };