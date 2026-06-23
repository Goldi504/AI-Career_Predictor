import api from "./axios";

export const analyzeProfile =
  async () => {
    const res =
      await api.post(
        "/ai/analyze-profile"
      );

    return res.data;
  };

export const getPredictionResult =
async()=>{

    const response =
    await api.get(
        "/ai/result"
    );

    return response.data;
};

export const getSkillGap = async () => {
  const response = await api.get(
    "/ai/skill-gap"
  );

  return response.data;
};

export const getRoadmap = async () => {
  const response = await api.get("/ai/roadmap");
  return response.data;
};