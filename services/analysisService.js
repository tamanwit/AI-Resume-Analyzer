require("dotenv").config()

const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const interaction = async (resumeText) => {
  const prompt = `
You are an expert ATS (Applicant Tracking System) evaluator and Senior Technical Recruiter.

Analyze the following resume thoroughly.

Your tasks are:
1. Give an ATS score out of 100.
2. Write a professional summary of the candidate.
3. List all technical skills.
4. List soft skills.
5. Identify the candidate's strengths.
6. Identify the candidate's weaknesses.
7. Suggest improvements to make the resume stronger.
8. Recommend technologies or skills the candidate should learn.
9. Evaluate each project individually.
10. Suggest five resume improvements that would significantly increase the candidate's interview chances.

IMPORTANT INSTRUCTIONS:
- Return ONLY valid JSON.
- Do NOT include markdown.
- Do NOT wrap the response inside \`\`\`json.
- Do NOT write any explanation outside the JSON.
- If a particular field cannot be determined, return an empty string ("") or an empty array ([]).

Return the response in exactly this format:

{
  "atsScore": 0,
  "summary": "",
  "technicalSkills": [],
  "softSkills": [],
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": [],
  "projects": [
    {
      "name": "",
      "rating": 0,
      "feedback": "",
      "improvements": []
    }
  ]
}

Resume:

${resumeText}
`;
  try {
    const response = await ai.interactions.create({
      model: "gemini-3.1-flash-lite",
      input: prompt,
    });
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
module.exports = {
  interaction,
};
